import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/reset.css";

const fontMontserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dlya Veronichki",
  description: "made by Roman with Love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontMontserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
