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
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-10 sm:py-14 md:grid-cols-2 md:items-center md:gap-12 md:py-24">
          {/* Photocard */}
          <div className="order-1 mx-auto w-full max-w-xs sm:max-w-sm md:order-2 md:max-w-none">
            <PhotocardStack />
          </div>

          {/* Text */}
          <div className="order-2 md:order-1">
            <p className="label-tag text-gold">Fansite independen — bukan situs resmi</p>

            <h1 className="mt-4 font-display text-4xl leading-[0.95] text-paper sm:text-5xl lg:text-6xl">
              DELAPAN
              <br />
              SUARA,
              <br />
              <span className="text-stroke">SATU</span> CATATAN.
            </h1>

            <p className="mt-5 max-w-full text-sm leading-7 text-paperdim sm:max-w-md sm:text-base">
              Arsip yang dikurasi STAY untuk STAY — kumpulan profil, momen panggung, dan jejak rilis Stray Kids sejak debut, disusun ulang biar enak ditelusuri kapan saja.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/members" className="w-full border border-maroon bg-maroon px-6 py-3 text-center label-tag text-paper transition hover:bg-transparent hover:text-maroon sm:w-auto">
                Lihat Members
              </Link>

              <Link href="/gallery" className="w-full border border-line px-6 py-3 text-center label-tag text-paperdim transition hover:border-paper hover:text-paper sm:w-auto">
                Jelajah Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-2xl text-paper sm:text-3xl">Catatan Terbaru</h2>

          <Link href="/news" className="label-tag text-gold hover:text-paper">
            Semua berita →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((item) => (
            <Link key={item.slug} href={`/news#${item.slug}`} className="group rounded-md border border-line p-5 transition hover:border-maroon">
              <p className="label-tag text-paperdim">
                {new Date(item.date).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}{" "}
                · {item.category}
              </p>

              <h3 className="mt-3 font-display text-xl leading-tight text-paper transition group-hover:text-gold">{item.title}</h3>

              <p className="mt-3 text-sm leading-6 text-paperdim">{item.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-2xl text-paper sm:text-3xl">Yang Akan Datang</h2>

            <Link href="/schedule" className="label-tag text-gold hover:text-paper">
              Jadwal lengkap →
            </Link>
          </div>

          <div className="flex flex-col">
            {upcoming.map((item) => (
              <div key={item.id} className="flex flex-col gap-4 border-b border-line py-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                  <span className="font-mono text-xs text-gold sm:text-sm">
                    {new Date(item.date).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "short",
                    })}
                  </span>

                  <span className="text-paper">{item.title}</span>
                </div>

                <span className="label-tag w-fit self-start border border-line px-3 py-1 text-paperdim">{item.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
