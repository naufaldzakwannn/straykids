import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start px-5 py-32">
      <p className="label-tag text-maroon">404</p>
      <h1 className="mt-3 font-display text-4xl text-paper sm:text-5xl">
        Halaman ini belum ada di arsip.
      </h1>
      <p className="mt-4 text-paperdim">
        Coba kembali ke index member, atau jelajahi gallery dan jadwal
        terbaru dari sana.
      </p>
      <Link
        href="/"
        className="mt-8 border border-maroon bg-maroon px-6 py-3 label-tag text-paper transition hover:bg-transparent hover:text-maroon"
      >
        Kembali ke Home
      </Link>
    </div>
  );
}
