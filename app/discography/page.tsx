import Link from "next/link";
import { releases } from "@/lib/discography";

export const metadata = {
  title: "Discography — STAY ARCHIVE",
};

const typeColor: Record<string, string> = {
  Album: "#8B1E2F",
  EP: "#C9A961",
  Mixtape: "#3A4A5C",
  Single: "#3D5A4A",
};

export default function DiscographyPage() {
  const sorted = [...releases].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const grouped = sorted.reduce<Record<string, typeof sorted>>((acc, r) => {
    const year = new Date(r.date).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(r);
    return acc;
  }, {});

  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="label-tag text-gold">Katalog</p>
      <h1 className="mt-2 font-display text-4xl text-paper sm:text-5xl">Discography</h1>
      <p className="mt-4 max-w-lg text-paperdim">Seluruh rilis dari debut hingga terbaru, dikelompokkan per tahun. Klik tiap judul untuk melihat tracklist dan catatan lengkap.</p>

      {/* Legend tipe rilis */}
      <div className="mt-8 flex flex-wrap gap-4">
        {Object.entries(typeColor).map(([type, color]) => (
          <span key={type} className="flex items-center gap-2 label-tag text-paperdim">
            <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
            {type}
          </span>
        ))}
      </div>

      <div className="mt-12 space-y-16">
        {years.map((year) => (
          <section key={year}>
            <p className="font-display text-5xl text-paper/10 sm:text-7xl">{year}</p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {grouped[year].map((release) => {
                const color = typeColor[release.type] ?? "#8B1E2F";
                return (
                  <Link
                    key={release.slug}
                    href={`/discography/${release.slug}`}
                    className="group flex flex-col justify-between border border-line bg-surface p-5 transition hover:-translate-y-1 hover:shadow-xl"
                    style={{ borderLeftColor: color, borderLeftWidth: "3px" }}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="label-tag" style={{ color }}>
                          {release.type}
                        </span>
                        <span className="font-mono text-xs text-paperdim">
                          {new Date(release.date).toLocaleDateString("id-ID", {
                            day: "2-digit",
                            month: "short",
                          })}
                        </span>
                      </div>
                      <p className="mt-3 font-display text-xl leading-tight text-paper group-hover:text-gold">{release.title}</p>
                      <p className="mt-1 text-sm text-paperdim">{release.titleTrack}</p>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
                      <span className="text-xs text-paperdim">{release.trackCount} lagu</span>
                      <span className="label-tag text-gold opacity-0 transition group-hover:opacity-100">Lihat detail →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
