import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "#" },
  { label: "Services", href: "/travel-services" },
  { label: "Destinations", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "Instagram",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </>
    ),
  },
  {
    label: "Facebook",
    icon: (
      <path
        d="M14 21v-7h2.5l.5-3H14V9.2c0-.9.3-1.5 1.6-1.5H17V5.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4v2.8H8v3h2.6v7h3.4z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "YouTube",
    icon: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" />
      </>
    ),
  },
  {
    label: "Pinterest",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M9.5 17l1.3-6M11 8.3a2.4 2.4 0 112.7 2.4c-.2 1.4-1 2.6-2.3 2.6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </>
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-cream-3 pt-12 pb-6">
      <div className="container-premium">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Link href="/" className="flex items-center gap-2.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 4l8 15H4L12 4z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-semibold tracking-[0.15em] uppercase text-ink">
              Wanderly Travel Co.
            </span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm transition-colors ${
                  link.label === "Services"
                    ? "text-ink font-semibold"
                    : "text-ink/60 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="text-ink/70 hover:text-ink transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-ink/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink/45">
            © {new Date().getFullYear()} Wanderly Travel Co. All rights
            reserved.
          </p>
          <p className="text-xs text-ink/45">
            Travel &bull; Explore &bull; Create Memories
          </p>
        </div>
      </div>
    </footer>
  );
}
