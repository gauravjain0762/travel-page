import Image from "next/image";

const services = [
  {
    title: "Bespoke Travel Planning",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Luxury Travel",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Family Holidays",
    image:
      "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Honeymoon Planning",
    image:
      "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Adventure Travel",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Cruise Planning",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=900&auto=format&fit=crop",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="container-premium grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16 items-start">
        <div>
          <p className="eyebrow text-gold mb-4">Our Services</p>
          <h2 className="font-display text-4xl sm:text-[2.75rem] leading-[1.15] text-ink">
            Travel Experiences, Designed Around You
          </h2>
          <p className="mt-6 text-ink/55 text-[0.95rem] leading-relaxed max-w-xs">
            From luxury escapes to family adventures, we create personalized
            travel experiences that match your style, interests and dreams.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-ink hover:text-gold transition-colors"
          >
            Explore All Services
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

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative h-[150px] sm:h-[190px] lg:h-[210px] rounded-xl overflow-hidden cursor-pointer"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-semibold text-sm leading-snug">
                  {service.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-white/85 text-xs mt-1.5">
                  Learn More
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
