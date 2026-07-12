'use client';

import { useRef, useState } from 'react';
import { betaSignup } from '@/content/copy';
import { submitBetaSignup } from '@/lib/beta';

type Status = 'idle' | 'submitting' | 'success' | 'error';

// Same cookieless anti-spam as the feedback form (#7): honeypot + a dwell
// timer. Both silently succeed without writing. See FeedbackForm for the
// full rationale and the honest limitation.
const DWELL_MS = 1500;

export function BetaSignup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const mountedAt = useRef(Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || status === 'submitting') return;

    const honeypotFilled = !!honeypotRef.current?.value;
    const tooFast = Date.now() - mountedAt.current < DWELL_MS;
    if (honeypotFilled || tooFast) {
      setName('');
      setEmail('');
      setStatus('success');
      return;
    }

    setStatus('submitting');
    try {
      await submitBetaSignup({ name, email });
      setName('');
      setEmail('');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="section section--sunken beta">
      <div className="section__inner section__inner--narrow">
        <h2>{betaSignup.heading}</h2>
        <p>{betaSignup.sub}</p>

        {status === 'success' ? (
          <p className="feedback__success" role="status">
            {betaSignup.success}
          </p>
        ) : (
          <form className="feedback beta__form" onSubmit={onSubmit}>
            <div className="beta__fields">
              <label className="feedback__field">
                <span className="feedback__label">{betaSignup.nameLabel}</span>
                <input
                  className="feedback__input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={betaSignup.namePlaceholder}
                  maxLength={100}
                  autoComplete="name"
                  required
                />
              </label>
              <label className="feedback__field">
                <span className="feedback__label">{betaSignup.emailLabel}</span>
                <input
                  className="feedback__input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={betaSignup.emailPlaceholder}
                  maxLength={320}
                  autoComplete="email"
                  required
                />
              </label>
            </div>

            {/* Honeypot: hidden from people, tempting to bots. */}
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
              disabled={status === 'submitting' || !name.trim() || !email.trim()}
            >
              {status === 'submitting' ? betaSignup.submitting : betaSignup.submit}
            </button>

            {status === 'error' && (
              <p className="feedback__error" role="alert">
                {betaSignup.error}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
