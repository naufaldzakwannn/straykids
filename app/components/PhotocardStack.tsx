"use client";

import Link from "next/link";
import Image from "next/image";
import { members } from "@/lib/members";
import type { CSSProperties } from "react";

// Rotasi tetap per kartu agar terasa "ditumpuk tangan", bukan random tiap render
const rotations = [-6, 3, -2, 5, -4, 2, -7, 4];

export default function PhotocardStack() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-2xl sm:h-[460px]">
      {members.map((member, i) => {
        const baseTransform = `translate(-50%, -50%) rotate(${rotations[i]}deg) translateX(${(i - 3.5) * 46}px)`;
        return (
          <Link
            key={member.slug}
            href={`/members/${member.slug}`}
            className="card-tilt absolute left-1/2 top-1/2 flex h-64 w-40 flex-col justify-between overflow-hidden rounded-sm border p-3 shadow-xl sm:h-72 sm:w-44"
            style={
              {
                transform: baseTransform,
                "--card-base-transform": baseTransform,
                backgroundColor: "#1D1D20",
                borderColor: member.accent,
                zIndex: i,
              } as CSSProperties
            }
          >
            {member.photo && (
              <>
                <Image src={member.photo} alt={member.stageName} fill sizes="176px" className="object-cover" priority={i < 4} />
                {/* Gradient gelap di bawah agar nama tetap terbaca di atas foto */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              </>
            )}

            <span className="label-tag relative z-10" style={{ color: member.accent }}>
              {String(member.lineNumber).padStart(2, "0")} / 08
            </span>
            <div className="relative z-10">
              <p className="font-display text-xl leading-none text-paper sm:text-2xl">{member.stageName}</p>
              <p className="label-tag mt-1 text-paperdim">{member.position[0]}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
