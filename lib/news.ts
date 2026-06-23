export type NewsItem = {
  slug: string;
  date: string;
  category: "Comeback" | "Variety" | "Chart" | "Tour" | "Fandom";
  title: string;
  excerpt: string;
  body: string[];
};

export const news: NewsItem[] = [
  {
    slug: "do-it-billboard",
    date: "2025-04-02",
    category: "Chart",
    title: "DO IT masuk lima besar Billboard 200",
    excerpt:
      "EP terbaru mencatatkan posisi tertinggi keempat grup ini di tangga album Amerika Serikat.",
    body: [
      "EP DO IT membuka pekan pertamanya dengan menempati posisi lima besar Billboard 200, melanjutkan rekam jejak konsisten grup ini di pasar Amerika Serikat sejak beberapa rilis sebelumnya.",
      "Penjualan fisik dan digital tercatat seimbang, dengan dukungan kuat dari basis fandom global yang aktif sejak masa pre-order dibuka.",
      "Title track CEREMONY juga masuk radar berbagai chart radio non-Korea dalam dua minggu pertama rilis.",
    ],
  },
  {
    slug: "han-anxiety-talk",
    date: "2025-02-18",
    category: "Variety",
    title: "Han membahas perjalanan mengelola kecemasan di sesi V Live",
    excerpt:
      "Dalam sesi siaran langsung santai, Han berbagi bagaimana ia belajar mengenali pola pikirnya sendiri selama beberapa tahun terakhir.",
    body: [
      "Dalam siaran langsung yang berlangsung santai, Han menjawab pertanyaan dari penggemar mengenai bagaimana ia menjalani hari-hari dengan tekanan jadwal yang padat.",
      "Ia menyebut menulis lirik sebagai salah satu cara utamanya memproses perasaan, dan mendorong penggemar yang mengalami hal serupa untuk tidak ragu mencari bantuan profesional bila diperlukan.",
      "Sesi tersebut ditutup dengan beberapa pertanyaan ringan seputar lagu favorit dari album terbaru.",
    ],
  },
  {
    slug: "skzoo-collab",
    date: "2025-01-30",
    category: "Fandom",
    title: "Lini merchandise SKZOO kolaborasi musim baru diumumkan",
    excerpt:
      "Karakter maskot masing-masing member kembali hadir dalam koleksi baru bertema musim semi.",
    body: [
      "Agensi mengumumkan koleksi SKZOO musim semi yang menghadirkan ulang karakter maskot tiap member dalam palet warna baru.",
      "Koleksi ini mencakup plushie, photocard eksklusif, dan aksesoris kecil yang dijual lewat platform resmi serta beberapa pop-up store di sejumlah kota besar Asia.",
    ],
  },
  {
    slug: "world-tour-extension",
    date: "2024-11-12",
    category: "Tour",
    title: "Tur dunia diperpanjang dengan tanggal tambahan di Asia Tenggara",
    excerpt:
      "Tinggi permintaan tiket membuat promotor menambah tanggal baru di beberapa kota Asia Tenggara.",
    body: [
      "Menyusul penjualan tiket yang terjual habis dalam hitungan menit di sejumlah kota, promotor tur resmi mengumumkan tanggal tambahan untuk wilayah Asia Tenggara.",
      "Penambahan ini menjadikan rangkaian tur dunia sebagai salah satu yang paling ekstensif sepanjang karier grup, mencakup puluhan kota di empat benua.",
    ],
  },
];
