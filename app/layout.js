import "./globals.css";

export const metadata = {
  title: "Ariel Berjit | Python Developer",
  description: "Web scraping, data extraction, and automation portfolio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
