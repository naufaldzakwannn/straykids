import Link from "next/link";
import { members } from "@/lib/members";

export const metadata = {
  title: "Members — STAY ARCHIVE",
};

export default function MembersPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="label-tag text-gold">Index</p>
      <h1 className="mt-2 font-display text-4xl text-paper sm:text-5xl">
        Delapan Personel
      </h1>
      <p className="mt-4 max-w-lg text-paperdim">
        Disusun berdasarkan urutan line distribution sejak debut, bukan
        peringkat. Klik tiap kartu untuk catatan lebih lengkap.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {members.map((member) => (
          <Link
            key={member.slug}
            href={`/members/${member.slug}`}
            className="group relative flex aspect-[3/4] flex-col justify-between border border-line bg-surface p-4 transition hover:-translate-y-1 hover:shadow-2xl"
            style={{ borderTopColor: member.accent, borderTopWidth: "3px" }}
          >
            <span className="label-tag text-paperdim">
              {String(member.lineNumber).padStart(2, "0")} / 08
            </span>
            <div>
              <p className="font-display text-2xl leading-none text-paper group-hover:text-gold">
                {member.stageName}
              </p>
              <p className="label-tag mt-2" style={{ color: member.accent }}>
                {member.position[0]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
