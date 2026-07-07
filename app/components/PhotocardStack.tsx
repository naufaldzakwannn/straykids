"use client";

import Link from "next/link";
import Image from "next/image";
import { members } from "@/lib/members";
import type { CSSProperties } from "react";

const rotations = [-6, 3, -2, 5, -4, 2, -7, 4];

export default function PhotocardStack() {
  return (
    <div className="relative mx-auto h-[300px] w-full max-w-xs overflow-hidden sm:h-[380px] sm:max-w-lg md:h-[460px] md:max-w-2xl">
      {members.map((member, i) => {
        const mobileOffset = (i - 3.5) * 24;
        const desktopOffset = (i - 3.5) * 46;

        const baseTransform = `translate(-50%, -50%) rotate(${rotations[i]}deg) translateX(${typeof window === "undefined" ? desktopOffset : desktopOffset}px)`;

        return (
          <Link
            key={member.slug}
            href={`/members/${member.slug}`}
            className="card-tilt absolute left-1/2 top-1/2 flex h-48 w-28 flex-col justify-between overflow-hidden rounded-sm border p-2 shadow-xl transition-transform sm:h-60 sm:w-36 sm:p-3 md:h-72 md:w-44"
            style={
              {
                transform: `translate(-50%, -50%) rotate(${rotations[i]}deg) translateX(${mobileOffset}px)`,
                "--card-base-transform": `translate(-50%, -50%) rotate(${rotations[i]}deg) translateX(${desktopOffset}px)`,
                backgroundColor: "#1D1D20",
                borderColor: member.accent,
                zIndex: i,
              } as CSSProperties
            }
          >
            {member.photo && (
              <>
                <Image src={member.photo} alt={member.stageName} fill sizes="(max-width:640px) 112px, (max-width:768px) 144px, 176px" className="object-cover" priority={i < 4} />

                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              </>
            )}

            <span className="label-tag relative z-10 text-[10px] sm:text-xs" style={{ color: member.accent }}>
              {String(member.lineNumber).padStart(2, "0")} / 08
            </span>

            <div className="relative z-10">
              <p className="font-display text-base leading-none text-paper sm:text-xl md:text-2xl">{member.stageName}</p>

              <p className="label-tag mt-1 text-[10px] text-paperdim sm:text-xs">{member.position[0]}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
