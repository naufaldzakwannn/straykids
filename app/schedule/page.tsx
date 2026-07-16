import { schedule } from "@/lib/schedule";

export const metadata = {
  title: "Schedule — STAY ARCHIVE",
};

const categoryColor: Record<string, string> = {
  Comeback: "#8B1E2F",
  Broadcast: "#C9A961",
  Tour: "#3A4A5C",
  "Fan Event": "#3D5A4A",
  Anniversary: "#6B4226",
};

export default function SchedulePage() {
  const sorted = [...schedule].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="mx-auto max-w-3xl px-5 py-10 sm:py-16">
      <p className="label-tag text-gold">Linimasa</p>

      <h1 className="mt-2 font-display text-3xl text-paper sm:text-4xl lg:text-5xl">
        Schedule
      </h1>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-paperdim sm:text-base">
        Disusun berdasarkan urutan waktu karena memang begitu cara jadwal
        bekerja—bukan sekadar label dekoratif. Detail dapat berubah, jadi tetap
        cek informasi resmi dari agensi untuk konfirmasi terbaru.
      </p>

      <div className="relative mt-10 border-l border-line pl-6 sm:mt-12 sm:pl-8">
        {sorted.map((item) => {
          const color = categoryColor[item.category] ?? "#8B1E2F";

          return (
            <article key={item.id} className="relative mb-10 last:mb-0">
              {/* Timeline Dot */}
              <span
                className="absolute -left-[30px] top-2 h-3 w-3 rounded-full border-2 sm:-left-[35px]"
                style={{
                  borderColor: color,
                  backgroundColor: "#0B0B0D",
                }}
              />

              {/* Date */}
              <p className="font-mono text-xs text-gold sm:text-sm">
                {new Date(item.date).toLocaleDateString("id-ID", {
                  weekday: "short",
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
                {item.time && ` · ${item.time}`}
              </p>

              {/* Title */}
              <h2 className="mt-2 font-display text-xl leading-tight text-paper sm:text-2xl">
                {item.title}
              </h2>

              {/* Location */}
              {item.location && (
                <p className="mt-1 text-sm text-paperdim">
                  {item.location}
                </p>
              )}

              {/* Description */}
              <p className="mt-3 text-sm leading-7 text-paperdim">
                {item.detail}
              </p>

              {/* Category */}
              <span
                className="mt-4 inline-flex rounded border px-3 py-1 text-xs uppercase tracking-wider"
                style={{
                  borderColor: color,
                  color,
                }}
              >
                {item.category}
              </span>
            </article>
          );
        })}
      </div>
    </div>
  );
}