import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rami Ben Othmen — Data Analyst",
  description:
    "Data Analyst | SQL & Visualization Enthusiast. Software Engineer with a Master’s degree in EDIS and experience in BI and AI systems.",
  metadataBase: new URL("https://localhost"),
  openGraph: {
    title: "Rami Ben Othmen — Data Analyst",
    description:
      "Data Analyst | SQL & Visualization Enthusiast. Software Engineer with a Master’s degree in EDIS and experience in BI and AI systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AudioPlayer />
      </body>
    </html>
  );
}
