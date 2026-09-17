"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Travel Services", href: "/travel-services" },
  { label: "Contact", href: "/contact" },
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
];

export default function SiteFooter() {
  const pathname = usePathname();

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
                  link.href === pathname
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
