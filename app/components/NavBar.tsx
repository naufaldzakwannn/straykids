"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/members", label: "Members" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/discography", label: "Discography" },
  { href: "/schedule", label: "Schedule" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Mencegah halaman di-scroll saat menu terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="font-display text-xl tracking-wide text-paper">STAY ARCHIVE</span>

            <span className="label-tag text-gold">vol.08</span>
          </Link>

          {/* Desktop */}
          <nav className="hidden gap-7 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link key={link.href} href={link.href} className={`label-tag pb-1 transition-colors ${active ? "border-b-2 border-maroon text-paper" : "text-paperdim hover:text-paper"}`}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile */}
          <button onClick={() => setOpen(true)} aria-label="Open Menu" className="md:hidden">
            <svg className="h-7 w-7 text-paper" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* FULLSCREEN MENU */}
      <div className={`fixed inset-0 z-50 flex flex-col bg-ink transition-all duration-500 ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-line px-6">
          <div>
            <h1 className="font-display text-xl text-paper">STAY ARCHIVE</h1>

            <p className="label-tag text-paperdim">Independent Fansite</p>
          </div>

          <button onClick={() => setOpen(false)} aria-label="Close Menu" className="rounded-full border border-line p-2 text-paper transition hover:border-maroon hover:text-maroon">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col items-center justify-center gap-8">
          {links.map((link, index) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-display text-4xl transition-all duration-300 sm:text-5xl ${active ? "text-maroon" : "text-paper hover:text-gold hover:tracking-widest"}`}
                style={{
                  transitionDelay: `${index * 70}ms`,
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-line px-6 py-8 text-center">
          <p className="label-tag text-paperdim">STRAY KIDS • STAY • 2018 — PRESENT</p>
        </div>
      </div>
    </>
  );
}
