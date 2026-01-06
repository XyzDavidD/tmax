import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TMAX - Boost Your Testosterone Naturally",
  description: "The first app designed to help you naturally boost your testosterone by identifying endocrine disruptors in everyday products and building testosterone-optimizing habits into your lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Momo+Trust+Display&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}


