"use client";

import { useState } from "react";

const preferences = [
  {
    label: "Relax & Unwind",
    icon: (
      <>
        <path d="M12 3C7 3 3 7.5 3 13h18c0-5.5-4-10-9-10z" />
        <path d="M12 13v6a2 2 0 0 1-2 2" />
        <path d="M12 3V1.5" />
      </>
    ),
  },
  {
    label: "Adventure & Exploration",
    icon: <path d="M3 19l6-11 4 6.5 3-5 5 9.5H3z" />,
  },
  {
    label: "Romantic Getaway",
    icon: (
      <path d="M12 20s-7.2-4.4-9.5-8.6C1 8 2.6 5 6 5c2 0 3.5 1.3 4 2.2.5-.9 2-2.2 4-2.2 3.4 0 5 3 3.5 6.4C19.2 15.6 12 20 12 20z" />
    ),
  },
  {
    label: "Family Holiday",
    icon: (
      <>
        <circle cx="9" cy="7.5" r="2.3" />
        <circle cx="16.5" cy="8.5" r="1.9" />
        <path d="M4 20c0-3 2.3-5.2 5-5.2s5 2.2 5 5.2" />
        <path d="M14.2 20c.2-2.3 1.8-4 3.5-4 1.9 0 3.4 1.9 3.6 4" />
      </>
    ),
  },
  {
    label: "Luxury Escape",
    icon: (
      <>
        <path d="M4 17.5l-1-8 4 3 5-6 5 6 4-3-1 8H4z" />
        <path d="M4 20.5h16" />
      </>
    ),
  },
  {
    label: "Cultural Experience",
    icon: (
      <>
        <path d="M3 10l9-6 9 6" />
        <path d="M5 10v10M9 10v10M15 10v10M19 10v10" />
        <path d="M4 20h16" />
      </>
    ),
  },
  {
    label: "Cruise Holiday",
    icon: (
      <>
        <path d="M4 16.5l1.7 4h12.6l1.7-4" />
        <path d="M6.5 16.5V8.5h4V5.5h3v3h4v8" />
        <path d="M3 16.5h18" />
      </>
    ),
  },
  {
    label: "Wellness Retreat",
    icon: (
      <>
        <path d="M12 21c-3-2.2-5.2-5.3-5.2-8.7A5.2 5.2 0 0 1 12 7a5.2 5.2 0 0 1 5.2 5.3c0 3.4-2.2 6.5-5.2 8.7z" />
        <path d="M12 13.3A5.2 5.2 0 0 0 7.2 8.5M12 13.3A5.2 5.2 0 0 1 16.8 8.5" />
      </>
    ),
  },
];

export default function TravelPreferences() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (label: string) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <section className="bg-cream-3 py-24 sm:py-28">
      <div className="container-premium">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow text-gold mb-4">Your Perfect Journey</p>
          <h2 className="font-cormorant font-medium text-4xl sm:text-5xl leading-tight text-ink">
            What Kind of Journey Are You Dreaming Of?
          </h2>
          <p className="mt-5 text-ink/55 text-base">
            Choose your preferences to help us understand your ideal travel
            experience.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {preferences.map((pref) => {
            const isSelected = selected.includes(pref.label);
            return (
              <button
                key={pref.label}
                type="button"
                onClick={() => toggle(pref.label)}
                aria-pressed={isSelected}
                className={`flex flex-col items-center justify-center gap-4 rounded-2xl border px-3 py-8 text-center transition-all duration-300 ${
                  isSelected
                    ? "border-gold bg-gold/[0.08] shadow-[0_18px_36px_-20px_rgba(201,162,75,0.5)]"
                    : "border-ink/10 bg-white hover:border-ink/20 hover:-translate-y-0.5"
                }`}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={isSelected ? "text-gold" : "text-ink/70"}
                >
                  <g
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {pref.icon}
                  </g>
                </svg>
                <span className="text-sm font-medium text-ink/80 leading-snug">
                  {pref.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <button type="button" className="inline-flex btn-pill-muted">
            Continue
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
