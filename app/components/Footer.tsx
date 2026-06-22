export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="perforation mb-8" />
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-lg text-paper">STAY ARCHIVE</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-paperdim">
              Situs penggemar independen yang dibuat oleh dan untuk STAY.
              Bukan situs resmi, dan tidak berafiliasi dengan agensi atau
              label rekaman manapun.
            </p>
          </div>
          <div className="label-tag flex gap-8 text-paperdim">
            <div>
              <p className="text-gold">Arsip sejak</p>
              <p className="mt-1">2024</p>
            </div>
            <div>
              <p className="text-gold">Update terakhir</p>
              <p className="mt-1">Mingguan</p>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-paperdim/70">
          Semua gambar dan merek dagang adalah milik pemegang hak cipta
          masing-masing dan digunakan di sini hanya untuk tujuan apresiasi
          penggemar non-komersial.
        </p>
      </div>
    </footer>
  );
}
