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
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="label-tag text-gold">Linimasa</p>
      <h1 className="mt-2 font-display text-4xl text-paper sm:text-5xl">
        Schedule
      </h1>
      <p className="mt-4 text-paperdim">
        Disusun urut waktu karena memang begitu cara jadwal bekerja —
        bukan label dekoratif. Detail dapat berubah, selalu cek info resmi
        agensi untuk konfirmasi akhir.
      </p>

      <div className="relative mt-12 border-l border-line pl-8">
        {sorted.map((item) => {
          const color = categoryColor[item.category] ?? "#8B1E2F";
          return (
            <div key={item.id} className="relative mb-10 last:mb-0">
              <span
                className="absolute -left-[34px] top-1 h-3 w-3 rounded-full border-2"
                style={{ borderColor: color, backgroundColor: "#0B0B0D" }}
              />
              <p className="font-mono text-sm text-gold">
                {new Date(item.date).toLocaleDateString("id-ID", {
                  weekday: "short",
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
                {item.time ? ` · ${item.time}` : ""}
              </p>
              <h2 className="mt-1 font-display text-xl text-paper sm:text-2xl">
                {item.title}
              </h2>
              {item.location && (
                <p className="label-tag mt-1 text-paperdim">{item.location}</p>
              )}
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-paperdim">
                {item.detail}
              </p>
              <span
                className="label-tag mt-3 inline-block border px-2 py-1"
                style={{ borderColor: color, color }}
              >
                {item.category}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
