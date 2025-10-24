import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "LighterBot Hub",
  description: "Collaborate, learn, and trade 'lighter' assets with strategy bots on Base",
  openGraph: {
    title: "LighterBot Hub",
    description: "Collaborate, learn, and trade 'lighter' assets with strategy bots on Base",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
