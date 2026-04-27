import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata = {
  title: "Ariel Berjit | Python Developer & Data Extraction",
  description:
    "Web scraping, data extraction, automation. Based in Bacolod City, Philippines."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
