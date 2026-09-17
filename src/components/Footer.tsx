const columns = [
  {
    title: "Destinations",
    links: ["Europe", "Asia Pacific", "Africa & Middle East", "The Americas"],
  },
  {
    title: "Company",
    links: ["About Wanderly", "Our Advisors", "Press", "Careers"],
  },
  {
    title: "Support",
    links: ["Contact", "Travel Protection", "Terms", "Privacy"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink-2 border-t border-line pt-20 pb-10">
      <div className="container-premium">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 pb-16">
          <div>
            <p className="font-logo text-3xl text-cream">Wanderly</p>
            <p className="text-cream/50 text-sm mt-4 max-w-xs leading-relaxed">
              A luxury travel advisory designing bespoke journeys and
              securing exclusive access for discerning travelers worldwide.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-cream text-sm font-semibold mb-4">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-cream/50 text-sm hover:text-gold-2 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-line pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-xs">
            © {new Date().getFullYear()} Wanderly Travel Co. All rights
            reserved.
          </p>
          <p className="text-cream/40 text-xs">
            Crafted for those who travel with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
