import type { Metadata } from "next";
import "./globals.css";

const faviconSvg =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%23EEF1F3'/%3E%3Cpath d='M7,3 C7,10 25,10 25,16 C25,22 7,22 7,29' fill='none' stroke='%231B2A3A' stroke-width='2'/%3E%3Cpath d='M25,3 C25,10 7,10 7,16 C7,22 25,22 25,29' fill='none' stroke='%231B2A3A' stroke-width='2' opacity='0.3'/%3E%3Ccircle cx='7' cy='3' r='2.5' fill='%23C1613C'/%3E%3Ccircle cx='25' cy='16' r='2.5' fill='%236B8F71'/%3E%3Ccircle cx='7' cy='29' r='2.5' fill='%231B2A3A'/%3E%3C/svg%3E";

export const metadata: Metadata = {
  title: "DataHelix · Computational & Network Biology",
  description:
    "DataHelix: mathematical and computational biology analysis for research groups. Single-cell, spatial, bulk and multi-omics, with custom network algorithms.",
  icons: {
    icon: faviconSvg,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
