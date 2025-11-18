import React from 'react';

export default function CTA() {
  return (
    <section id="book" className="relative z-10 bg-slate-950 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Reserve Your Cleaning
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Share a few details about your space and schedule. Our concierge team will respond promptly with availability and a tailored quote.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#quote"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-slate-900 transition hover:bg-white/90"
          >
            Request a Quote
          </a>
          <a
            href="mailto:concierge@opulentcleaning.com"
            className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Email Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
