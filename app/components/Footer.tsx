export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:py-12">
        <div className="perforation mb-8" />

        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-md">
            <p className="font-display text-xl text-paper">STAY ARCHIVE</p>

            <p className="mt-3 text-sm leading-7 text-paperdim">Situs penggemar independen yang dibuat oleh dan untuk STAY. Bukan situs resmi, dan tidak berafiliasi dengan agensi maupun label rekaman mana pun.</p>
          </div>

          {/* Info */}
          <div className="grid grid-cols-2 gap-6 text-sm md:flex md:gap-10">
            <div>
              <p className="label-tag text-gold">Arsip sejak</p>

              <p className="mt-2 text-paper">2024</p>
            </div>

            <div>
              <p className="label-tag text-gold">Update terakhir</p>

              <p className="mt-2 text-paper">Mingguan</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-line pt-6">
          <p className="text-xs leading-6 text-paperdim/70">
            Semua gambar, logo, nama artis, album, dan merek dagang merupakan milik pemegang hak cipta masing-masing. Konten pada situs ini disediakan semata-mata untuk tujuan arsip dan apresiasi penggemar secara non-komersial.
          </p>
        </div>
      </div>
    </footer>
  );
}
