import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient + vignette so text remains legible */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 sm:px-8">
        <div className="max-w-3xl text-white">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm tracking-wide backdrop-blur-sm">
            Premium Residential & Commercial Care
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Opulent Cleaning Services
          </h1>
          <p className="mt-4 text-lg text-white/80 sm:text-xl">
            Impeccable spaces, elevated service. We deliver discreet, detail-obsessed cleaning for homes and offices where presentation and peace of mind matter most.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-slate-900 transition hover:bg-white/90"
            >
              Book a Cleaning
            </a>
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Request a Quote
            </a>
          </div>

          <p className="mt-6 text-sm text-white/70">
            Trusted by discerning homeowners, property managers, and executive teams.
          </p>
        </div>
      </div>
    </section>
  );
}
