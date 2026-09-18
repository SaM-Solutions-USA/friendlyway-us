import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const poppins = localFont({
  src: [
    { path: "../public/wp-content/themes/friendlyway/fonts/Poppins/Poppins-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/wp-content/themes/friendlyway/fonts/Poppins/Poppins-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/wp-content/themes/friendlyway/fonts/Poppins/Poppins-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/wp-content/themes/friendlyway/fonts/Poppins/Poppins-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-display",
});

const openSans = localFont({
  src: [
    { path: "../public/wp-content/themes/friendlyway/fonts/OpenSans/OpenSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/wp-content/themes/friendlyway/fonts/OpenSans/OpenSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/wp-content/themes/friendlyway/fonts/OpenSans/OpenSans-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/wp-content/themes/friendlyway/fonts/OpenSans/OpenSans-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  // Temporary bootstrap shell. The legacy export owns SEO; never index this
  // placeholder route. The real homepage/document ownership transfer happens
  // in later migration chunks.
  title: "Bootstrap | friendlyway.us migration",
  icons: {
    icon: "/favicon.svg",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${openSans.variable} ${poppins.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
