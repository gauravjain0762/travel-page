import Image from "next/image";

const reels = [
  {
    image:
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=700&auto=format&fit=crop",
    views: "12.4K",
    alt: "Luxury yacht anchored near a coastline",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=700&auto=format&fit=crop",
    views: "8.7K",
    alt: "Couple sharing a romantic moment at golden hour",
  },
  {
    image:
      "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=700&auto=format&fit=crop",
    views: "15.3K",
    alt: "Infinity pool surrounded by palm trees",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=700&auto=format&fit=crop",
    views: "11.2K",
    alt: "Gondola gliding beneath a historic bridge",
  },
  {
    image:
      "https://images.unsplash.com/photo-1476900543704-4312b78632f8?q=80&w=700&auto=format&fit=crop",
    views: "9.8K",
    alt: "View of a sunset over the coast from an airplane window",
  },
];

export default function TravelInspiration() {
  return (
    <section className="bg-cream-3 pt-[60px] sm:pt-[20px] pb-0 sm:pb-28">
      <div className="container-premium">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow text-gold mb-4">Travel Inspiration</p>
            <h2 className="font-cormorant font-medium text-4xl sm:text-[2.75rem] leading-tight text-ink mb-3">
              Real Moments. Beautiful Journeys.
            </h2>
            <p className="text-ink/55 text-[0.95rem] max-w-md">
              Follow our latest travel stories, experiences and
              behind-the-scenes moments on Instagram.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 mx-auto sm:mx-0 rounded-full border border-ink/15 px-5 py-3 text-sm font-medium text-ink hover:border-ink/30 transition-colors whitespace-nowrap"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
            </svg>
            Follow Us on Instagram
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {reels.map((reel, i) => (
            <div
              key={i}
              className="group relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer"
            >
              <Image
                src={reel.image}
                alt={reel.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <span className="absolute top-3 left-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 3h12v18l-6-4.5L6 21V3z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>

              <span className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-medium">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                {reel.views}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
