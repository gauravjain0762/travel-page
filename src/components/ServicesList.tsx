import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Bespoke Travel Planning",
    desc: "Personalized itineraries designed around your travel style, interests, and schedule.",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=700&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Luxury Travel",
    desc: "Exceptional hotels, exclusive experiences, and thoughtful details for a memorable escape.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=700&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Family Holidays",
    desc: "Comfortable, enjoyable journeys with experiences designed for every generation.",
    image:
      "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?q=80&w=700&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Honeymoon Planning",
    desc: "Romantic getaways tailored to create unforgettable memories together.",
    image:
      "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?q=80&w=700&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "Adventure Travel",
    desc: "Exciting experiences, outdoor activities, and journeys beyond the ordinary.",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=700&auto=format&fit=crop",
  },
  {
    number: "06",
    title: "Cruise Planning",
    desc: "Discover cruise experiences with carefully selected itineraries and onboard stays.",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=700&auto=format&fit=crop",
  },
  {
    number: "07",
    title: "Group Travel",
    desc: "Well-organized travel experiences for friends, families, and special groups.",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=700&auto=format&fit=crop",
  },
  {
    number: "08",
    title: "Custom Itineraries",
    desc: "A flexible travel plan created specifically around your wishes.",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=700&auto=format&fit=crop",
  },
];

export default function ServicesList() {
  return (
    <section className="bg-cream-3 py-24 sm:py-28">
      <div className="container-premium">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-ink/50 mb-4">
            Our Services
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl leading-tight text-ink">
            How Can We Help You Travel?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-14 gap-y-14">
          {services.map((s) => (
            <div key={s.number} className="flex gap-6 items-start">
              <div className="relative w-[180px] sm:w-[190px] h-[150px] rounded-xl overflow-hidden shrink-0">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="190px"
                />
              </div>
              <div>
                <p className="text-xs text-ink/40 mb-2">{s.number}</p>
                <h3 className="font-cormorant text-2xl text-ink mb-2">
                  {s.title}
                </h3>
                <p className="text-ink/55 text-sm leading-relaxed mb-3 max-w-[280px]">
                  {s.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-gold transition-colors"
                >
                  Learn More
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
