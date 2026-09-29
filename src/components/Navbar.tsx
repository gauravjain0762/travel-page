"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Instagram", href: "https://www.instagram.com/ri.imagine.travel/" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({
  heroTheme = "dark",
}: {
  heroTheme?: "dark" | "light";
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgDark = scrolled || open;
  const textLight = heroTheme === "dark" || bgDark;
  const hideCta = pathname === "/start-planning";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        bgDark
          ? "bg-ink/90 backdrop-blur-md shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-premium flex items-center justify-between py-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.jpg"
            alt="Ri-Imagine Travel"
            width={52}
            height={52}
            className="h-12 w-12 rounded-full object-cover"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => {
            const active = link.href === pathname;
            return (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`relative text-sm pb-1 transition-colors ${
                  textLight
                    ? "text-cream/85 hover:text-cream"
                    : "text-ink/80 hover:text-ink"
                } ${
                  active
                    ? `after:absolute after:left-0 after:bottom-0 after:h-px after:w-full ${
                        textLight ? "after:bg-cream" : "after:bg-ink"
                      }`
                    : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href="/start-planning"
          className={`hidden lg:inline-flex btn-pill-gold ${
            hideCta ? "invisible pointer-events-none" : ""
          }`}
        >
          Start Planning
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

        <button
          aria-label="Toggle menu"
          className={`lg:hidden ${textLight ? "text-cream" : "text-ink"}`}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink border-t border-line">
          <div className="container-premium flex flex-col gap-5 py-6">
            {links.map((link) => {
              const active = link.href === pathname;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className={`text-sm ${
                    active ? "text-cream font-semibold" : "text-cream/85"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            {!hideCta && (
              <a
                href="/start-planning"
                onClick={() => setOpen(false)}
                className="inline-flex btn-pill-gold w-full mt-2"
              >
                Start Planning
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
            )}
          </div>
        </div>
      )}
    </header>
  );
}
