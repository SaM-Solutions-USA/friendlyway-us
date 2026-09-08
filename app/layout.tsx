import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // Temporary bootstrap shell. The legacy export owns SEO; never index this
  // placeholder route. The real homepage/document ownership transfer happens
  // in later migration chunks.
  title: "Bootstrap | friendlyway.us migration",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
