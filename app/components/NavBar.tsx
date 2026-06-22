"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl tracking-wide text-paper">
            STAY ARCHIVE
          </span>
          <span className="label-tag text-gold">vol. 08</span>
        </Link>

        <nav className="hidden gap-7 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`label-tag pb-1 transition-colors ${
                  active
                    ? "border-b-2 border-maroon text-paper"
                    : "text-paperdim hover:text-paper"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Buka menu navigasi"
          className="label-tag text-paper md:hidden"
        >
          {open ? "Tutup" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-line bg-ink px-5 py-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="label-tag border-b border-line py-3 text-paperdim last:border-none hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
