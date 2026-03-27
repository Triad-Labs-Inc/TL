import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Triad Labs: AI-native studio. We make companies future ready.",
  description: "Triad Labs embeds autonomous AI systems across your organisation — so your team moves faster, thinks bigger, and operates at a level that wasn't possible before.",
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
