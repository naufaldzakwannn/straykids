import { news } from "@/lib/news";

export const metadata = {
  title: "News — STAY ARCHIVE",
};

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="label-tag text-gold">Catatan</p>
      <h1 className="mt-2 font-display text-4xl text-paper sm:text-5xl">
        News
      </h1>
      <p className="mt-4 text-paperdim">
        Rangkuman kabar seputar comeback, chart, dan momen variety —
        ditulis ulang dengan ringkas, bukan salinan rilis pers.
      </p>

      <div className="mt-12 flex flex-col">
        {news.map((item) => (
          <article
            key={item.slug}
            id={item.slug}
            className="border-t border-line py-10 first:border-t-0 first:pt-0"
          >
            <p className="label-tag text-paperdim">
              {new Date(item.date).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
            <span className="label-tag mt-1 inline-block text-maroon">
              {item.category}
            </span>
            <h2 className="mt-3 font-display text-2xl leading-tight text-paper sm:text-3xl">
              {item.title}
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-paper/90">
              {item.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
