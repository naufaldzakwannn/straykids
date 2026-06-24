import { members, getMember } from "@/lib/members";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const member = getMember(params.slug);
  return { title: member ? `${member.stageName} — STAY ARCHIVE` : "Member" };
}

export default function MemberDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const member = getMember(params.slug);
  if (!member) notFound();

  const index = members.findIndex((m) => m.slug === member.slug);
  const prev = members[(index - 1 + members.length) % members.length];
  const next = members[(index + 1) % members.length];

  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <Link href="/members" className="label-tag text-paperdim hover:text-paper">
        ← Kembali ke index
      </Link>

      <div
        className="mt-8 border-l-4 pl-6"
        style={{ borderColor: member.accent }}
      >
        <p className="label-tag" style={{ color: member.accent }}>
          {String(member.lineNumber).padStart(2, "0")} / 08 · {member.unit}
        </p>
        <h1 className="mt-2 font-display text-5xl text-paper sm:text-6xl">
          {member.stageName}
        </h1>
        <p className="mt-1 text-paperdim">{member.realName}</p>
      </div>

      <div className="mt-10 grid gap-10 sm:grid-cols-3">
        <div className="sm:col-span-2">
          <h2 className="label-tag text-gold">Profil</h2>
          <p className="mt-3 leading-relaxed text-paper">{member.bio}</p>

          <h2 className="label-tag mt-8 text-gold">Catatan</h2>
          <ul className="mt-3 space-y-2">
            {member.facts.map((fact, i) => (
              <li key={i} className="flex gap-3 text-paperdim">
                <span className="font-mono text-xs text-paperdim/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-line pt-6 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
          <h2 className="label-tag text-gold">Detail</h2>
          <dl className="mt-3 space-y-3 text-sm">
            <div>
              <dt className="text-paperdim">Posisi</dt>
              <dd className="text-paper">{member.position.join(", ")}</dd>
            </div>
            <div>
              <dt className="text-paperdim">Sub-unit</dt>
              <dd className="text-paper">{member.unit}</dd>
            </div>
            <div>
              <dt className="text-paperdim">Lahir</dt>
              <dd className="font-mono text-paper">{member.birthDate}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-line pt-6">
        <Link
          href={`/members/${prev.slug}`}
          className="label-tag text-paperdim hover:text-paper"
        >
          ← {prev.stageName}
        </Link>
        <Link
          href={`/members/${next.slug}`}
          className="label-tag text-paperdim hover:text-paper"
        >
          {next.stageName} →
        </Link>
      </div>
    </div>
  );
}
