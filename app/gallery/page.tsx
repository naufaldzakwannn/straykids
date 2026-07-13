"use client";

import { useState } from "react";
import Image from "next/image";
import { members } from "@/lib/members";
import { galleryEntries } from "@/lib/gallery";
import PhotoPlaceholder from "../components/PhotoPlaceholder";

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? galleryEntries : galleryEntries.filter((e) => e.memberSlug === filter);

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:py-16">
      <p className="label-tag text-gold">Koleksi</p>

      <h1 className="mt-2 font-display text-3xl text-paper sm:text-4xl lg:text-5xl">Gallery</h1>

      <p className="mt-4 max-w-xl text-sm leading-7 text-paperdim sm:text-base">Tempat menyusun fancam, candid, dan momen panggung. Saring berdasarkan member untuk menemukan foto favoritmu.</p>

      {/* Filter */}
      <div className="mt-8 -mx-5 overflow-x-auto px-5">
        <div className="flex w-max gap-2 pb-2">
          <button
            onClick={() => setFilter("all")}
            className={`whitespace-nowrap rounded border px-4 py-2 label-tag transition ${filter === "all" ? "border-maroon bg-maroon text-paper" : "border-line text-paperdim hover:border-paper hover:text-paper"}`}
          >
            Semua
          </button>

          {members.map((m) => (
            <button
              key={m.slug}
              onClick={() => setFilter(m.slug)}
              className={`whitespace-nowrap rounded border px-4 py-2 label-tag transition ${filter === m.slug ? "text-paper" : "border-line text-paperdim hover:border-paper hover:text-paper"}`}
              style={
                filter === m.slug
                  ? {
                      borderColor: m.accent,
                      backgroundColor: m.accent,
                    }
                  : undefined
              }
            >
              {m.stageName}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-5">
        {filtered.map((entry, i) => (
          <div
            key={entry.id}
            className="group"
            style={{
              transform: i % 5 === 0 ? "rotate(-1.5deg)" : i % 3 === 0 ? "rotate(1.5deg)" : "none",
            }}
          >
            {entry.photo ? (
              <div className="relative aspect-[3/4] overflow-hidden rounded border border-line">
                <Image src={entry.photo} alt={entry.caption} fill sizes="(max-width:640px) 50vw, (max-width:768px) 33vw, 25vw" className="object-cover transition duration-300 group-hover:scale-105" />
              </div>
            ) : (
              <PhotoPlaceholder memberSlug={entry.memberSlug} caption={entry.caption} />
            )}

            <p className="mt-2 truncate text-xs text-paper sm:text-sm">{entry.caption}</p>

            <p className="label-tag mt-1 text-paperdim">{entry.era}</p>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-16 text-center">
          <p className="text-paperdim">Belum ada foto untuk member ini.</p>
        </div>
      )}
    </div>
  );
}
