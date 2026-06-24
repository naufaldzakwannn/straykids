"use client";

import { useState } from "react";
import { members } from "@/lib/members";
import PhotoPlaceholder from "../components/PhotoPlaceholder";

type GalleryEntry = {
  id: string;
  memberSlug: string;
  caption: string;
  era: string;
};

// Susun manual: ganti PhotoPlaceholder dengan <img src="/images/...jpg" /> begitu foto asli tersedia
const entries: GalleryEntry[] = members.flatMap((m, i) => [
  {
    id: `${m.slug}-1`,
    memberSlug: m.slug,
    caption: `${m.stageName} — fancam stage`,
    era: i % 2 === 0 ? "Rock-Star" : "ATE",
  },
  {
    id: `${m.slug}-2`,
    memberSlug: m.slug,
    caption: `${m.stageName} — photocard candid`,
    era: i % 2 === 0 ? "5-Star" : "DO IT",
  },
]);

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all" ? entries : entries.filter((e) => e.memberSlug === filter);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="label-tag text-gold">Koleksi</p>
      <h1 className="mt-2 font-display text-4xl text-paper sm:text-5xl">
        Gallery
      </h1>
      <p className="mt-4 max-w-lg text-paperdim">
        Tempat menyusun fancam, candid, dan momen panggung. Saring per
        member untuk fokus ke satu wajah saja.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`label-tag border px-4 py-2 ${
            filter === "all"
              ? "border-maroon bg-maroon text-paper"
              : "border-line text-paperdim hover:border-paper hover:text-paper"
          }`}
        >
          Semua
        </button>
        {members.map((m) => (
          <button
            key={m.slug}
            onClick={() => setFilter(m.slug)}
            className={`label-tag border px-4 py-2 transition ${
              filter === m.slug
                ? "text-paper"
                : "border-line text-paperdim hover:border-paper hover:text-paper"
            }`}
            style={
              filter === m.slug
                ? { borderColor: m.accent, backgroundColor: m.accent }
                : undefined
            }
          >
            {m.stageName}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {filtered.map((entry, i) => (
          <div
            key={entry.id}
            className="aspect-[3/4]"
            style={{
              transform: i % 5 === 0 ? "rotate(-1.5deg)" : i % 3 === 0 ? "rotate(1.5deg)" : "none",
            }}
          >
            <PhotoPlaceholder memberSlug={entry.memberSlug} caption={entry.caption} />
            <p className="label-tag mt-2 text-paperdim">{entry.era}</p>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-paperdim">Belum ada foto untuk filter ini.</p>
      )}
    </div>
  );
}
