'use client';

import { useRef, useState } from 'react';
import { feedbackForm } from '@/content/copy';
import { submitFeedback } from '@/lib/feedback';

type Status = 'idle' | 'submitting' | 'success' | 'error';

// Cookieless anti-spam (web issue #7). Two client-side deterrents that keep
// the "No cookies. Obviously." promise intact:
//   1. Honeypot — a field hidden from people; bots that auto-fill forms
//      populate it. If it is filled, we show success but write nothing.
//   2. Dwell time — a real person must read and type a message, which takes
//      seconds; a submit within DWELL_MS of mount is treated as a bot.
// Both silently succeed (no write) so bots get no signal to adapt.
//
// LIMITATION, on purpose: these stop bots that scrape and submit the actual
// form. They do NOT stop a script POSTing straight to the Firestore endpoint
// — only App Check does that, and App Check's reCAPTCHA sets cookies, which
// is why we chose not to use it here (#7). If direct-endpoint spam ever
// appears, revisit that tradeoff. The create-only validated rules still
// bound every write regardless.
const DWELL_MS = 1500;

export function FeedbackForm({
  source,
  heading,
  sub,
}: {
  source: 'home' | 'support' | 'roadmap';
  heading: string;
  sub: string;
}) {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const mountedAt = useRef(Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim() || status === 'submitting') return;

    // Silent drop for the two bot signals: look successful, write nothing.
    const honeypotFilled = !!honeypotRef.current?.value;
    const tooFast = Date.now() - mountedAt.current < DWELL_MS;
    if (honeypotFilled || tooFast) {
      setMessage('');
      setEmail('');
      setStatus('success');
      return;
    }

    setStatus('submitting');
    try {
      await submitFeedback({ message, email, source });
      setMessage('');
      setEmail('');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="feedback">
        <h2>{heading}</h2>
        <p className="feedback__success" role="status">
          {feedbackForm.success}
        </p>
      </div>
    );
  }

  return (
    <form className="feedback" onSubmit={onSubmit}>
      <h2>{heading}</h2>
      <p className="feedback__sub">{sub}</p>

      <label className="feedback__field">
        <span className="feedback__label">{feedbackForm.messageLabel}</span>
        <textarea
          className="feedback__textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={feedbackForm.messagePlaceholder}
          maxLength={5000}
          rows={5}
          required
        />
      </label>

      <label className="feedback__field">
        <span className="feedback__label">{feedbackForm.emailLabel}</span>
        <span className="feedback__hint">{feedbackForm.emailHint}</span>
        <input
          className="feedback__input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={feedbackForm.emailPlaceholder}
          maxLength={320}
          autoComplete="email"
        />
      </label>

      {/* Honeypot: hidden from people, tempting to bots. Not real input. */}
      <div className="feedback__hp" aria-hidden="true">
        <label>
          Website
          <input
            ref={honeypotRef}
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <button
        className="feedback__submit"
        type="submit"
        disabled={status === 'submitting' || !message.trim()}
      >
        {status === 'submitting' ? feedbackForm.submitting : feedbackForm.submit}
      </button>

      {status === 'error' && (
        <p className="feedback__error" role="alert">
          {feedbackForm.error}
        </p>
      )}
    </form>
  );
}
