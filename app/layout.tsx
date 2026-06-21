import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Florence Kaneng Review",
  description:
    "A premium online magazine of motherhood, care, childhood, nursing, faith, and community life, published in support of Florence Kaneng Institute.",
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
