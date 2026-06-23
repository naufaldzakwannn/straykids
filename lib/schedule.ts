export type ScheduleItem = {
  id: string;
  date: string; // ISO date
  time?: string;
  title: string;
  category: "Comeback" | "Broadcast" | "Tour" | "Fan Event" | "Anniversary";
  location?: string;
  detail: string;
};

export const schedule: ScheduleItem[] = [
  {
    id: "sch-01",
    date: "2026-07-08",
    time: "18:00 KST",
    title: "Comeback teaser pertama dirilis",
    category: "Comeback",
    detail: "Teaser image pertama dijadwalkan tayang di seluruh akun resmi grup.",
  },
  {
    id: "sch-02",
    date: "2026-07-15",
    time: "19:00 KST",
    title: "Music video teaser",
    category: "Comeback",
    detail: "Trailer cuplikan music video title track baru, durasi sekitar 60 detik.",
  },
  {
    id: "sch-03",
    date: "2026-07-22",
    title: "Rilis album penuh",
    category: "Comeback",
    detail: "Album dan music video title track rilis serentak pukul 18:00 KST.",
  },
  {
    id: "sch-04",
    date: "2026-07-23",
    time: "20:30 KST",
    title: "Comeback stage — M Countdown",
    category: "Broadcast",
    location: "Seoul, Korea Selatan",
    detail: "Penampilan comeback stage pertama untuk title track baru.",
  },
  {
    id: "sch-05",
    date: "2026-08-02",
    title: "Fan meeting lokal — SKZOO Pop-up",
    category: "Fan Event",
    location: "Jakarta, Indonesia",
    detail: "Acara pop-up merchandise resmi, bukan kehadiran member secara langsung.",
  },
  {
    id: "sch-06",
    date: "2026-08-14",
    title: "Hari jadi debut",
    category: "Anniversary",
    detail: "Memperingati hari debut resmi grup dengan konten spesial dari fandom.",
  },
];
