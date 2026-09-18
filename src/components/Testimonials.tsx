"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Every detail was thoughtfully planned, and the entire experience felt effortless. We couldn't have asked for more!",
    name: "Sarah & James",
    location: "Italy",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "An unforgettable experience from start to finish. The perfect mix of adventure, relaxation and luxury.",
    name: "Priya S.",
    location: "Greece",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "Professional, responsive and truly cared about our experience. We'll be booking with you again!",
    name: "Daniel M.",
    location: "Switzerland",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "The itinerary was flawless — every recommendation felt like it was made just for us.",
    name: "Emily R.",
    location: "Maldives",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "From the first call to the last day, everything felt personal and well thought out.",
    name: "Marcus T.",
    location: "Japan",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "They understood exactly what we wanted and delivered beyond expectations.",
    name: "Aisha K.",
    location: "Morocco",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop",
  },
];

const perPage = 3;
const pageCount = Math.ceil(testimonials.length / perPage);

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMobileIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  const prev = () => setPage((p) => (p - 1 + pageCount) % pageCount);
  const next = () => setPage((p) => (p + 1) % pageCount);

  return (
    <section className="bg-cream-3 pt-[20px] pb-0 sm:pb-28">
      <div className="container-premium">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="eyebrow text-gold mb-4">Kind Words</p>
          <h2 className="font-cormorant font-medium text-4xl sm:text-[2.75rem] leading-tight text-ink">
            Journeys Worth Remembering
          </h2>
        </div>

        <div className="sm:hidden overflow-hidden mb-6">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="w-full shrink-0 px-1">
                <p className="font-display text-2xl text-ink/30 leading-none mb-2">
                  &ldquo;
                </p>
                <p className="text-ink/80 text-[0.95rem] leading-relaxed mb-8">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink/50">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-1.5 mt-8">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === mobileIndex ? "w-5 bg-gold" : "w-1.5 bg-ink/15"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="hidden sm:flex relative items-start gap-4 sm:gap-8">
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={prev}
            className="shrink-0 mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/60 hover:border-ink/30 hover:text-ink transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 flex-1">
            {visible.map((t) => (
              <div key={t.name}>
                <p className="font-display text-2xl text-ink/30 leading-none mb-2">
                  &ldquo;
                </p>
                <p className="text-ink/80 text-[0.95rem] leading-relaxed mb-8">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink/50">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonials"
            onClick={next}
            className="shrink-0 mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/60 hover:border-ink/30 hover:text-ink transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.6"
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
