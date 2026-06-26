export type Member = {
  slug: string;
  stageName: string;
  realName: string;
  position: string[];
  unit: "3RACHA" | "Dance Racha" | "Vocal Racha";
  birthDate: string;
  lineNumber: number; // urutan di line distribution, bukan ranking
  accent: string; // hex aksen personal, dipakai tipis di card & halaman member
  bio: string;
  facts: string[];
  photo?: string;
};

export const members: Member[] = [
  {
    slug: "bangchan",
    stageName: "Bang Chan",
    realName: "Bang Chris-topher",
    position: ["Leader", "Main Rapper", "Producer"],
    unit: "3RACHA",
    birthDate: "1997-10-03",
    lineNumber: 1,
    accent: "#8B1E2F",
    bio: "Produser utama di balik sebagian besar diskografi grup lewat 3RACHA. Dikenal sangat protektif ke member lain dan jadi penghubung utama dengan label.",
    facts: ["Lahir dan besar di Sydney, Australia", "Memegang co-writing credit di hampir seluruh title track", "Punya kebiasaan tidur paling sedikit di antara member"],
    photo: "/images/members/bangchan.jpg",
  },
  {
    slug: "lee-know",
    stageName: "Lee Know",
    realName: "Lee Min-ho",
    position: ["Main Dancer", "Sub Vocalist"],
    unit: "Dance Racha",
    birthDate: "1998-10-25",
    lineNumber: 2,
    accent: "#3A4A5C",
    bio: "Tulang punggung formasi koreografi grup. Dikenal lewat segmen kucing-kucing di konten variety dan ekspresi datar yang jadi ciri khas.",
    facts: ["Memulai karier sebagai trainee balet sebelum pindah ke dance modern", "Sering memimpin bagian formasi paling teknis dalam koreografi", "Punya tiga kucing peliharaan yang sering muncul di konten"],
    photo: "/images/members/leeknow.jpg",
  },
  {
    slug: "changbin",
    stageName: "Changbin",
    realName: "Seo Chang-bin",
    position: ["Main Rapper", "Producer"],
    unit: "3RACHA",
    birthDate: "1999-08-11",
    lineNumber: 3,
    accent: "#1F2D3D",
    bio: "Separuh dari identitas rap grup berdampingan dengan Chan dan Han. Suara bass dalamnya jadi penanda khas verse-verse 3RACHA.",
    facts: ["Tinggi badan jadi bahan self-deprecating joke favoritnya", "Aktif nge-mix dan mastering demo internal sebelum masuk studio resmi", "Punya proyek sampingan vokal lower register yang jarang ditonjolkan"],
    photo: "/images/members/changbin.jpg",
  },
  {
    slug: "hyunjin",
    stageName: "Hyunjin",
    realName: "Hwang Hyun-jin",
    position: ["Main Dancer", "Sub Rapper", "Visual"],
    unit: "Dance Racha",
    birthDate: "1999-03-20",
    lineNumber: 4,
    accent: "#6B4226",
    bio: "Dikenal lewat kombinasi line dance modern dan latar belakang seni lukis. Sering terlibat dalam concept art dan moodboard era comeback.",
    facts: ["Belajar lukis sejak sekolah dan masih aktif menggambar", "Sempat menjalani masa hiatus publik dan comeback dengan dukungan fandom yang kuat", "Dikenal dengan line dance yang jadi ciri banyak koreografi grup"],
    photo: "/images/members/hyunjin.jpg",
  },
  {
    slug: "han",
    stageName: "Han",
    realName: "Han Ji-sung",
    position: ["Main Rapper", "Producer", "Sub Vocalist"],
    unit: "3RACHA",
    birthDate: "1999-09-14",
    lineNumber: 5,
    accent: "#C9A961",
    bio: "Penulis lirik paling produktif di 3RACHA, sering menulis dari pengalaman pribadi soal kecemasan dan tekanan industri.",
    facts: ["Dikenal lewat energi panggung yang sangat ekspresif", "Banyak lirik personal grup ditulis langsung dari pengalamannya", "Sempat terbuka soal perjuangannya dengan anxiety di depan publik"],
    photo: "/images/members/han.jpg",
  },
  {
    slug: "felix",
    stageName: "Felix",
    realName: "Lee Felix",
    position: ["Main Dancer", "Sub Rapper"],
    unit: "Dance Racha",
    birthDate: "2000-09-15",
    lineNumber: 6,
    accent: "#2C2C2C",
    bio: "Vokal bass khasnya jadi salah satu identitas sonic grup. Lahir di Sydney, satu kota dengan Chan sebelum keduanya bertemu lewat agensi yang sama.",
    facts: ["Lahir dan besar di Sydney, Australia, sama seperti Chan", "Vokal bass-nya yang dalam jadi meme dan ciri khas tersendiri", "Belajar bahasa Korea secara intensif sebelum debut"],
    photo: "/images/members/felix.jpg",
  },
  {
    slug: "seungmin",
    stageName: "Seungmin",
    realName: "Kim Seung-min",
    position: ["Main Vocalist"],
    unit: "Vocal Racha",
    birthDate: "2000-09-22",
    lineNumber: 7,
    accent: "#3D5A4A",
    bio: "Vokal utama grup dengan rentang nada yang konsisten jadi andalan di bagian klimaks lagu. Punya timing komedi natural di konten variety.",
    facts: ["Salah satu member dengan jadwal trainee paling singkat sebelum debut", "Sering jadi MC dadakan di konten variety internal grup", "Vokalnya jadi anchor di banyak bagian bridge dan chorus"],
    photo: "/images/members/seungmin.jpg",
  },
  {
    slug: "in",
    stageName: "I.N",
    realName: "Yang Jeong-in",
    position: ["Sub Vocalist", "Visual"],
    unit: "Vocal Racha",
    birthDate: "2001-02-08",
    lineNumber: 8,
    accent: "#4A4A52",
    bio: "Member termuda yang tumbuh di depan publik sejak masa trainee. Vokalnya berkembang signifikan dari era debut hingga sekarang.",
    facts: ["Member termuda atau 'maknae' dari kedelapan personel", "Dikenal lewat suara tertawa khasnya yang sering jadi bahan klip", "Mulai dipercaya membawakan line vokal yang lebih kompleks di era-era terbaru"],
    photo: "/images/members/in.jpg",
  },
];

export function getMember(slug: string) {
  return members.find((m) => m.slug === slug);
}
