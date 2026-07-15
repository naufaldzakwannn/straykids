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
  const sorted = [...releases].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const grouped = sorted.reduce<Record<string, typeof sorted>>((acc, release) => {
    const year = new Date(release.date).getFullYear().toString();

    if (!acc[year]) {
      acc[year] = [];
    }

    acc[year].push(release);

    return acc;
  }, {});

  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="mx-auto max-w-5xl px-5 py-10 sm:py-16">
      <p className="label-tag text-gold">
        Katalog
      </p>

      <h1 className="mt-2 font-display text-3xl text-paper sm:text-4xl lg:text-5xl">
        Discography
      </h1>

      <p className="mt-4 max-w-xl text-sm leading-7 text-paperdim sm:text-base">
        Seluruh rilis Stray Kids dari debut hingga terbaru. Klik setiap album,
        EP, atau single untuk melihat tracklist dan informasi lengkap.
      </p>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap gap-3">
        {Object.entries(typeColor).map(([type, color]) => (
          <span
            key={type}
            className="flex items-center gap-2 rounded border border-line px-3 py-2 text-xs text-paperdim"
          >
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: color }}
            />

            {type}
          </span>
        ))}
      </div>

      <div className="mt-12 space-y-12 sm:space-y-16">
        {years.map((year) => (
          <section key={year}>
            <h2 className="font-display text-4xl text-paper/15 sm:text-6xl lg:text-7xl">
              {year}
            </h2>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {grouped[year].map((release) => {
                const color = typeColor[release.type] ?? "#8B1E2F";

                return (
                  <Link
                    key={release.slug}
                    href={`/discography/${release.slug}`}
                    className="group rounded border border-line bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-paper"
                    style={{
                      borderLeftWidth: "4px",
                      borderLeftColor: color,
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className="label-tag shrink-0"
                        style={{ color }}
                      >
                        {release.type}
                      </span>

                      <span className="font-mono text-xs text-paperdim whitespace-nowrap">
                        {new Date(release.date).toLocaleDateString("id-ID", {
                          day: "2-digit",
                          month: "short",
                        })}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-2xl leading-tight text-paper transition group-hover:text-gold">
                      {release.title}
                    </h3>

                    <p className="mt-2 text-sm text-paperdim">
                      {release.titleTrack}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                      <span className="text-xs text-paperdim">
                        {release.trackCount} lagu
                      </span>

                      <span className="label-tag text-gold opacity-100 sm:opacity-0 sm:transition sm:group-hover:opacity-100">
                        Detail →
                      </span>
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
