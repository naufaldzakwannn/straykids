"use client";

import Link from "next/link";
import { members } from "@/lib/members";

// Rotasi tetap per kartu agar terasa "ditumpuk tangan", bukan random tiap render
const rotations = [-6, 3, -2, 5, -4, 2, -7, 4];

export default function PhotocardStack() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-md sm:h-[400px]">
      {members.map((member, i) => (
        <Link
          key={member.slug}
          href={`/members/${member.slug}`}
          className="card-tilt absolute left-1/2 top-1/2 flex h-64 w-44 -translate-x-1/2 -translate-y-1/2 flex-col justify-between rounded-sm border p-3 shadow-xl"
          style={{
            transform: `translate(-50%, -50%) rotate(${rotations[i]}deg) translateX(${(i - 3.5) * 18}px)`,
            backgroundColor: "#1D1D20",
            borderColor: member.accent,
            zIndex: i,
          }}
        >
          <span
            className="label-tag"
            style={{ color: member.accent }}
          >
            {String(member.lineNumber).padStart(2, "0")} / 08
          </span>
          <div>
            <p className="font-display text-2xl leading-none text-paper">
              {member.stageName}
            </p>
            <p className="label-tag mt-1 text-paperdim">
              {member.position[0]}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
