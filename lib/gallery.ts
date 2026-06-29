export type GalleryEntry = {
  id: string;
  memberSlug: string;
  caption: string;
  era: string;
  photo?: string; // path relatif dari /public, contoh: "/images/gallery/bangchan-1.jpg". Kosongkan jika belum ada foto.
};

// Tambah, hapus, atau edit entri di sini untuk mengubah isi halaman Gallery.
// Foto yang belum diisi otomatis tampil sebagai placeholder di halaman.
export const galleryEntries: GalleryEntry[] = [
  {
    id: "bangchan-1",
    memberSlug: "bangchan",
    caption: "Bang Chan — fancam stage",
    era: "Rock-Star",
    photo: "/images/gallery/bc2.jpg",
  },
  {
    id: "bangchan-2",
    memberSlug: "bangchan",
    caption: "Bang Chan — photocard candid",
    era: "5-Star",
  },
  {
    id: "lee-know-1",
    memberSlug: "lee-know",
    caption: "Lee Know — fancam stage",
    era: "ATE",
    photo: "/images/gallery/lk2.jpg",
  },
  {
    id: "lee-know-2",
    memberSlug: "lee-know",
    caption: "Lee Know — photocard candid",
    era: "DO IT",
  },
  {
    id: "changbin-1",
    memberSlug: "changbin",
    caption: "Changbin — fancam stage",
    era: "Rock-Star",
    photo: "/images/gallery/cb2.jpg",
  },
  {
    id: "changbin-2",
    memberSlug: "changbin",
    caption: "Changbin — photocard candid",
    era: "5-Star",
  },
  {
    id: "hyunjin-1",
    memberSlug: "hyunjin",
    caption: "Hyunjin — fancam stage",
    era: "ATE",
    photo: "/images/gallery/hj2.jpg",
  },
  {
    id: "hyunjin-2",
    memberSlug: "hyunjin",
    caption: "Hyunjin — photocard candid",
    era: "DO IT",
  },
  {
    id: "han-1",
    memberSlug: "han",
    caption: "Han — fancam stage",
    era: "Rock-Star",
    photo: "/images/gallery/han2.jpg",
  },
  {
    id: "han-2",
    memberSlug: "han",
    caption: "Han — photocard candid",
    era: "5-Star",
  },
  {
    id: "felix-1",
    memberSlug: "felix",
    caption: "Felix — fancam stage",
    era: "ATE",
    photo: "/images/gallery/felix2.jpg",
  },
  {
    id: "felix-2",
    memberSlug: "felix",
    caption: "Felix — photocard candid",
    era: "DO IT",
  },
  {
    id: "seungmin-1",
    memberSlug: "seungmin",
    caption: "Seungmin — fancam stage",
    era: "Rock-Star",
    photo: "/images/gallery/sm2.jpg",
  },
  {
    id: "seungmin-2",
    memberSlug: "seungmin",
    caption: "Seungmin — photocard candid",
    era: "5-Star",
  },
  {
    id: "in-1",
    memberSlug: "in",
    caption: "I.N — fancam stage",
    era: "ATE",
    photo: "/images/gallery/in2.jpg",
  },
  {
    id: "in-2",
    memberSlug: "in",
    caption: "I.N — photocard candid",
    era: "DO IT",
  },
];
