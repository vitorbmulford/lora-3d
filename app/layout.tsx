import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Circuit Lab — Laboratório 3D",
  description: "Laboratório interativo de montagem eletrônica em 3D",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
