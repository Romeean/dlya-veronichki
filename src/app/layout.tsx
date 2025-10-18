import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/reset.css";

const ralewayFont = Raleway({
  variable: "--font-geist-sans",
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
      <body className={`${ralewayFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
