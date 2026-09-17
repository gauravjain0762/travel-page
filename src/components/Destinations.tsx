import Image from "next/image";

const destinations = [
  {
    name: "Santorini",
    country: "Greece",
    price: "4,200",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Kyoto",
    country: "Japan",
    price: "5,600",
    image:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Amalfi Coast",
    country: "Italy",
    price: "4,950",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Maldives",
    country: "Indian Ocean",
    price: "7,300",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Marrakech",
    country: "Morocco",
    price: "3,400",
    image:
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1400&auto=format&fit=crop",
  },
  {
    name: "Patagonia",
    country: "Chile & Argentina",
    price: "8,100",
    image:
      "https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="bg-cream py-28 sm:py-32">
      <div className="container-premium">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow text-gold mb-4">Signature Destinations</p>
            <h2 className="font-display text-4xl sm:text-5xl leading-tight max-w-xl">
              Where our clients travel next.
            </h2>
          </div>
          <p className="max-w-sm text-ink/60 text-sm leading-relaxed">
            A curated selection from our portfolio — each itinerary fully
            tailored, never templated.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((d) => (
            <div key={d.name} className="card-lift group cursor-pointer">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={d.image}
                  alt={`${d.name}, ${d.country}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-xs text-gold-2 tracking-[0.2em] uppercase mb-1">
                    {d.country}
                  </p>
                  <h3 className="font-display text-2xl text-cream">
                    {d.name}
                  </h3>
                </div>
              </div>
              <div className="flex items-center justify-between border border-t-0 border-ink/10 px-6 py-4">
                <span className="text-sm text-ink/50">From</span>
                <span className="font-display text-lg">${d.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
