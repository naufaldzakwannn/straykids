import { news } from "@/lib/news";

export const metadata = {
  title: "News — STAY ARCHIVE",
};

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10 sm:py-16">
      <p className="label-tag text-gold">Catatan</p>

      <h1 className="mt-2 font-display text-3xl text-paper sm:text-4xl lg:text-5xl">News</h1>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-paperdim sm:text-base">Rangkuman kabar seputar comeback, chart, dan momen variety — ditulis ulang dengan ringkas, bukan salinan rilis pers.</p>

      <div className="mt-10 flex flex-col sm:mt-12">
        {news.map((item) => (
          <article key={item.slug} id={item.slug} className="border-t border-line py-8 first:border-t-0 first:pt-0 sm:py-10">
            <p className="label-tag text-paperdim">
              {new Date(item.date).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>

            <span className="label-tag mt-2 inline-flex w-fit rounded border border-maroon px-2 py-1 text-maroon">{item.category}</span>

            <h2 className="mt-4 font-display text-xl leading-tight text-paper sm:text-2xl lg:text-3xl">{item.title}</h2>

            <div className="mt-5 space-y-5 text-sm leading-7 text-paper/90 sm:text-base sm:leading-8">
              {item.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
