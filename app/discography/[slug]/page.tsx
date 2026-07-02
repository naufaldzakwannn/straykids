import type { Metadata } from "next";
import { releases, getRelease } from "@/lib/discography";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return releases.map((r) => ({
    slug: r.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  const release = getRelease(slug);

  return {
    title: release ? `${release.title} — STAY ARCHIVE` : "Discography",
  };
}

const typeColor: Record<string, string> = {
  Album: "#8B1E2F",
  EP: "#C9A961",
  Mixtape: "#3A4A5C",
  Single: "#3D5A4A",
};

export default async function ReleaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const release = getRelease(slug);

  if (!release) {
    notFound();
  }

  const color = typeColor[release.type] ?? "#8B1E2F";

  const sorted = [...releases].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const index = sorted.findIndex((r) => r.slug === release.slug);
  const prev = sorted[(index - 1 + sorted.length) % sorted.length];
  const next = sorted[(index + 1) % sorted.length];

  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <Link href="/discography" className="label-tag text-paperdim hover:text-paper">
        ← Kembali ke katalog
      </Link>

      {/* Header */}
      <div className="mt-8 border-l-4 pl-6" style={{ borderColor: color }}>
        <span className="label-tag" style={{ color }}>
          {release.type}
        </span>
        <h1 className="mt-2 font-display text-4xl leading-tight text-paper sm:text-5xl">{release.title}</h1>
        <p className="mt-2 font-mono text-sm text-paperdim">
          {new Date(release.date).toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>

      <div className="mt-10 grid gap-10 sm:grid-cols-3">
        {/* Cover Art */}
        <div className="relative aspect-square w-full overflow-hidden border bg-surface" style={{ borderColor: color }}>
          {release.cover ? (
            <Image src={release.cover} alt={release.title} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed p-4 text-center" style={{ borderColor: color }}>
              <span className="font-display text-3xl text-paper/10">{release.title.slice(0, 2).toUpperCase()}</span>
              <span className="label-tag text-paperdim/60">
                Tambahkan cover ke
                <br />
                /public/images/discography/
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="sm:col-span-2">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
            <div>
              <dt className="label-tag text-paperdim">Title Track</dt>
              <dd className="mt-1 text-paper">{release.titleTrack}</dd>
            </div>
            <div>
              <dt className="label-tag text-paperdim">Jumlah Lagu</dt>
              <dd className="mt-1 font-mono text-paper">{release.trackCount}</dd>
            </div>
            <div>
              <dt className="label-tag text-paperdim">Tipe</dt>
              <dd className="mt-1" style={{ color }}>
                {release.type}
              </dd>
            </div>
            <div>
              <dt className="label-tag text-paperdim">Tanggal Rilis</dt>
              <dd className="mt-1 font-mono text-paper">
                {new Date(release.date).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </dd>
            </div>
          </dl>

          <p className="mt-6 leading-relaxed text-paper/90">{release.note}</p>
        </div>
      </div>

      {/* Tracklist */}
      {release.tracklist && release.tracklist.length > 0 && (
        <div className="mt-14">
          <div className="flex items-baseline gap-4 border-b border-line pb-3">
            <h2 className="font-display text-2xl text-paper">Tracklist</h2>
            <span className="label-tag text-paperdim">{release.tracklist.length} lagu</span>
          </div>

          <ol className="mt-2 flex flex-col">
            {release.tracklist.map((track, i) => {
              const isTitle = track.startsWith(release.titleTrack) || track === release.titleTrack;
              return (
                <li key={i} className={`flex items-center gap-5 border-b border-line py-4 transition ${isTitle ? "bg-surface/60" : "hover:bg-surface/30"}`}>
                  <span className="w-7 shrink-0 font-mono text-xs text-paperdim/50 text-right">{String(i + 1).padStart(2, "0")}</span>
                  <span className={`flex-1 ${isTitle ? "font-display text-lg text-gold" : "text-paper"}`}>{track}</span>
                  {isTitle && (
                    <span className="label-tag border px-2 py-0.5 shrink-0" style={{ borderColor: color, color }}>
                      Title Track
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      )}

      {!release.tracklist && <p className="mt-12 text-sm text-paperdim">Tracklist untuk rilis ini belum didata.</p>}

      {/* Nav prev/next */}
      <div className="mt-16 flex items-center justify-between border-t border-line pt-6">
        <Link href={`/discography/${prev.slug}`} className="group flex flex-col gap-1">
          <span className="label-tag text-paperdim">← Sebelumnya</span>
          <span className="font-display text-sm text-paper group-hover:text-gold">{prev.title}</span>
        </Link>
        <Link href={`/discography/${next.slug}`} className="group flex flex-col items-end gap-1">
          <span className="label-tag text-paperdim">Selanjutnya →</span>
          <span className="font-display text-sm text-paper group-hover:text-gold">{next.title}</span>
        </Link>
      </div>
    </div>
  );
}
