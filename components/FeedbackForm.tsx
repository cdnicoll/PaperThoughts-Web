'use client';

import { useState } from 'react';
import { feedbackForm } from '@/content/copy';
import { submitFeedback } from '@/lib/feedback';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function FeedbackForm({
  source,
  heading,
  sub,
}: {
  source: 'home' | 'support';
  heading: string;
  sub: string;
}) {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim() || status === 'submitting') return;
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
