import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grovitt — Studio for Smarter Marketing & Real Growth",
  description:
    "A digital studio at the intersection of brand, performance, and product — building campaigns and software for ambitious teams since 2013.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700;800&family=Fraunces:ital,opsz,wght,SOFT@0,9..144,200..700,0..100;1,9..144,200..700,0..100&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
