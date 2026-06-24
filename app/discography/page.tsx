import { releases } from "@/lib/discography";

export const metadata = {
  title: "Discography — STAY ARCHIVE",
};

export default function DiscographyPage() {
  const sorted = [...releases].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <p className="label-tag text-gold">Katalog</p>
      <h1 className="mt-2 font-display text-4xl text-paper sm:text-5xl">
        Discography
      </h1>
      <p className="mt-4 max-w-lg text-paperdim">
        Disusun dari rilis terbaru ke yang paling lama, lengkap dengan
        title track dan jumlah lagu di setiap rilis.
      </p>

      <div className="mt-12">
        <div className="label-tag grid grid-cols-[1fr_2fr_1fr] gap-4 border-b border-line pb-3 text-paperdim sm:grid-cols-[1fr_2fr_2fr_1fr]">
          <span>Tanggal</span>
          <span>Judul</span>
          <span className="hidden sm:block">Title Track</span>
          <span className="text-right">Tipe</span>
        </div>

        {sorted.map((release) => (
          <div
            key={release.slug}
            className="group grid grid-cols-[1fr_2fr_1fr] items-baseline gap-4 border-b border-line py-4 transition hover:bg-surface/40 sm:grid-cols-[1fr_2fr_2fr_1fr]"
          >
            <span className="font-mono text-xs text-paperdim">
              {new Date(release.date).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
            <div>
              <p className="font-display text-lg leading-tight text-paper group-hover:text-gold">
                {release.title}
              </p>
              <p className="text-xs text-paperdim">{release.trackCount} lagu</p>
            </div>
            <span className="hidden text-sm text-paperdim sm:block">
              {release.titleTrack}
            </span>
            <span className="label-tag justify-self-end border border-line px-2 py-1 text-paperdim">
              {release.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
