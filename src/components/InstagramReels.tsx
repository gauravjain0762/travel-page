import Image from "next/image";

const reels = [
  {
    caption: "Travel Experiences",
    kind: "collage",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=700&auto=format&fit=crop",
    alt: "Santorini coastline",
  },
  {
    caption: "Hotel Tours",
    kind: "reel",
    image:
      "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=700&auto=format&fit=crop",
    alt: "Luxury hotel pool",
  },
  {
    caption: "Behind the Scenes",
    kind: "plain",
    image:
      "https://images.unsplash.com/photo-1499591934245-40b55745b905?q=80&w=700&auto=format&fit=crop",
    alt: "Behind the scenes of a travel shoot",
  },
  {
    caption: "Travel Tips",
    kind: "tips",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=700&auto=format&fit=crop",
    alt: "Filming travel tips in a historic old town",
  },
  {
    caption: "Client Journeys",
    kind: "journeys",
  },
];

export default function InstagramReels() {
  return (
    <section className="bg-cream-3 py-24 sm:py-28">
      <div className="container-premium">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-ink/50 mb-4">
            Instagram Inspiration
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl leading-tight text-ink">
            See Travel Through Our Eyes
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 flex-1">
            {reels.map((reel) => (
              <div key={reel.caption}>
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-ink shadow-[0_20px_40px_-20px_rgba(11,19,32,0.35)]">
                  {reel.kind === "journeys" ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0e3b3a] via-[#123f3e] to-ink" />
                  ) : (
                    <Image
                      src={reel.image!}
                      alt={reel.alt!}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/20" />

                  {/* play button, common to all */}
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm text-white">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>

                  {reel.kind === "collage" && (
                    <>
                      <span className="absolute top-3 right-3 rounded-md bg-red-600 text-white text-[0.6rem] font-bold px-1.5 py-0.5">
                        43K
                      </span>
                      <div className="absolute top-3 left-3">
                        <p className="text-white text-xs font-bold uppercase leading-tight">
                          Travel
                          <br />
                          Experiences Reel
                        </p>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1">
                        {["Positano, Italy", "Bali, Indonesia", "Maldives", "Marrakech, Morocco"].map(
                          (place) => (
                            <span
                              key={place}
                              className="text-white text-[0.6rem] font-medium"
                            >
                              {place}
                            </span>
                          )
                        )}
                      </div>
                    </>
                  )}

                  {reel.kind === "reel" && (
                    <>
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white text-[0.65rem]">
                        <span className="flex items-center gap-1 font-semibold">
                          Reels
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M6 9l6 6 6-6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <rect
                            x="3"
                            y="6"
                            width="14"
                            height="12"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="1.4"
                          />
                          <path d="M17 10l4-2v8l-4-2" stroke="currentColor" strokeWidth="1.4" />
                        </svg>
                      </div>
                      <div className="absolute top-9 left-3 flex items-center gap-1.5">
                        <span className="h-5 w-5 rounded-full bg-white/30 border border-white/60" />
                        <span className="text-white text-[0.6rem] font-semibold">
                          Sarah Travels
                        </span>
                        <span className="ml-1 rounded-full border border-white/70 text-white text-[0.55rem] px-1.5 py-0.5">
                          Follow
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-8">
                        <p className="text-white text-[0.65rem] font-bold uppercase">
                          Luxury Hotel Reveal
                        </p>
                        <p className="text-white/85 text-[0.6rem]">
                          Lobby &amp; staircase tour highlights
                        </p>
                      </div>
                      <div className="absolute bottom-3 right-2 flex flex-col items-center gap-2.5 text-white">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 20s-7.2-4.4-9.5-8.6C1 8 2.6 5 6 5c2 0 3.5 1.3 4 2.2.5-.9 2-2.2 4-2.2 3.4 0 5 3 3.5 6.4C19.2 15.6 12 20 12 20z" />
                        </svg>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M21 11.5a8.4 8.4 0 01-9.8 8.3 9.9 9.9 0 01-2.6-.7L3 20l1-5.5a8.4 8.4 0 1117-3z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </>
                  )}

                  {reel.kind === "tips" && (
                    <div className="absolute top-3 left-3 right-3">
                      <p className="text-white text-xs font-bold uppercase">
                        Travel Tips Reel
                      </p>
                      <p className="text-white/85 text-[0.65rem] mt-0.5">
                        Best packing hacks!
                      </p>
                    </div>
                  )}

                  {reel.kind === "journeys" && (
                    <div className="absolute top-4 left-3 right-3">
                      <p className="text-white text-xs font-bold uppercase leading-snug">
                        Client Journeys Reel
                      </p>
                    </div>
                  )}
                </div>

                <p className="mt-3 text-sm font-medium text-ink/80">
                  {reel.caption}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-row items-center gap-4 lg:pl-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 text-ink text-xs font-semibold uppercase tracking-[0.1em] px-6 py-4 whitespace-nowrap hover:border-ink/40 transition-colors"
            >
              Explore Instagram Reels
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
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 text-ink">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
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
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
