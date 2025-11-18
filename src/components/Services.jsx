import React from 'react';

const services = [
  {
    title: 'Deep Cleaning',
    copy:
      'A meticulous top-to-bottom reset. We detail kitchens and baths, hand-wipe trim and fixtures, and refresh high-touch surfaces for an immaculate finish.',
  },
  {
    title: 'Recurring Maintenance',
    copy:
      'Weekly, bi-weekly, or monthly schedules that maintain hotel-level tidiness, leaving every room crisp, sanitized, and camera-ready.',
  },
  {
    title: 'Move-In / Move-Out',
    copy:
      'Pristine turnover cleaning that restores spaces to like-new condition—inside appliances, cabinetry, and closets—so you can hand over keys with confidence.',
  },
  {
    title: 'Office & Workspace',
    copy:
      'Quiet, reliable service for executive suites, creative studios, and boutique offices—sanitized workstations, glass, and shared areas without disruption.',
  },
  {
    title: 'Specialty Services',
    copy:
      'From post-renovation dust removal to stainless, stone, and fine-surface care, we tailor methods and materials to your space and finishes.',
  },
];

export default function Services() {
  return (
    <section className="relative z-10 bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Elevated Service, Immaculate Results
          </h2>
          <p className="mt-3 text-white/70">
            We treat every property with white-glove precision—discreet, dependable, and tailored to your exacting standards.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 transition hover:border-white/20"
            >
              <div className="absolute inset-0 bg-[radial-gradient(150px_80px_at_0%_0%,rgba(255,255,255,0.08),transparent)] opacity-0 transition group-hover:opacity-100" />
              <h3 className="text-lg font-medium text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
