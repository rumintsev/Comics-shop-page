import type { Metadata } from "next";
import { Inter, Staatliches } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const staatliches = Staatliches({ weight: "400", subsets: ["latin"], variable: "--font-staatliches" });

export const metadata: Metadata = {
  title: "Comics Shop",
  description: "Your one-stop shop for all things comics.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${staatliches.variable}`}>
      <body>{children}</body>
    </html>
  );
}
