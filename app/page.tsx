import Link from "next/link";
import PhotocardStack from "./components/PhotocardStack";
import { news } from "@/lib/news";
import { schedule } from "@/lib/schedule";

export default function HomePage() {
  const latestNews = news.slice(0, 3);
  const upcoming = schedule.slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="label-tag text-gold">Fansite independen — bukan situs resmi</p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] text-paper sm:text-6xl">
              DELAPAN
              <br />
              SUARA,
              <br />
              <span className="text-stroke">SATU</span> CATATAN.
            </h1>
            <p className="mt-6 max-w-md text-paperdim">Arsip yang dikurasi STAY untuk STAY — kumpulan profil, momen panggung, dan jejak rilis Stray Kids sejak debut, disusun ulang biar enak ditelusuri kapan saja.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/members" className="border border-maroon bg-maroon px-6 py-3 label-tag text-paper transition hover:bg-transparent hover:text-maroon">
                Lihat Members
              </Link>
              <Link href="/gallery" className="border border-line px-6 py-3 label-tag text-paperdim transition hover:border-paper hover:text-paper">
                Jelajah Gallery
              </Link>
            </div>
          </div>
          <PhotocardStack />
        </div>
      </section>

      {/* NEWS PREVIEW */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl text-paper">Catatan Terbaru</h2>
          <Link href="/news" className="label-tag text-gold hover:text-paper">
            Semua berita →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {latestNews.map((item) => (
            <Link key={item.slug} href={`/news#${item.slug}`} className="group border-t-2 border-line pt-4 transition hover:border-maroon">
              <p className="label-tag text-paperdim">
                {new Date(item.date).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}{" "}
                · {item.category}
              </p>
              <h3 className="mt-2 font-display text-xl leading-tight text-paper group-hover:text-gold">{item.title}</h3>
              <p className="mt-2 text-sm text-paperdim">{item.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* SCHEDULE PREVIEW */}
      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-display text-3xl text-paper">Yang Akan Datang</h2>
            <Link href="/schedule" className="label-tag text-gold hover:text-paper">
              Jadwal lengkap →
            </Link>
          </div>
          <div className="flex flex-col">
            {upcoming.map((item) => (
              <div key={item.id} className="flex flex-col gap-3 border-b border-line py-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-gold">
                    {new Date(item.date).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "short",
                    })}
                  </span>
                  <span className="text-paper">{item.title}</span>
                </div>
                <span className="label-tag w-fit border border-line px-3 py-1 text-paperdim">{item.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
