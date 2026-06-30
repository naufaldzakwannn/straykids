import type { Metadata } from "next";
import { Anton, Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const body = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "STAY ARCHIVE — Fansite Stray Kids",
  description: "Arsip penggemar independen untuk Stray Kids: profil member, galeri, diskografi, dan jadwal comeback.",
  icons: {
    icon: [{ url: "/skz.webp", type: "image/webp" }],
    shortcut: "/skz.webp",
    apple: "/skz.webp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${body.variable} ${mono.variable} font-body`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
