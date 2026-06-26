"use client";

import { useState } from "react";
import Image from "next/image";
import { members } from "@/lib/members";
import { galleryEntries } from "@/lib/gallery";
import PhotoPlaceholder from "../components/PhotoPlaceholder";

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? galleryEntries : galleryEntries.filter((e) => e.memberSlug === filter);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="label-tag text-gold">Koleksi</p>
      <h1 className="mt-2 font-display text-4xl text-paper sm:text-5xl">Gallery</h1>
      <p className="mt-4 max-w-lg text-paperdim">Tempat menyusun fancam, candid, dan momen panggung. Saring per member untuk fokus ke satu wajah saja.</p>

      <div className="mt-8 flex flex-wrap gap-2">
        <button onClick={() => setFilter("all")} className={`label-tag border px-4 py-2 ${filter === "all" ? "border-maroon bg-maroon text-paper" : "border-line text-paperdim hover:border-paper hover:text-paper"}`}>
          Semua
        </button>
        {members.map((m) => (
          <button
            key={m.slug}
            onClick={() => setFilter(m.slug)}
            className={`label-tag border px-4 py-2 transition ${filter === m.slug ? "text-paper" : "border-line text-paperdim hover:border-paper hover:text-paper"}`}
            style={filter === m.slug ? { borderColor: m.accent, backgroundColor: m.accent } : undefined}
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
            {entry.photo ? (
              <div className="relative h-full w-full overflow-hidden border border-line">
                <Image src={entry.photo} alt={entry.caption} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
              </div>
            ) : (
              <PhotoPlaceholder memberSlug={entry.memberSlug} caption={entry.caption} />
            )}
            <p className="label-tag mt-2 text-paperdim">{entry.era}</p>
          </div>
        ))}
      </div>

      {filtered.length === 0 && <p className="mt-10 text-paperdim">Belum ada foto untuk filter ini.</p>}
    </div>
  );
}
