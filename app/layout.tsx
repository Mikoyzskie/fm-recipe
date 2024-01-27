import type { Metadata } from "next";
import { outfit } from "@/app/font"
import "./globals.css";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-[#F3E5D7] min-h-screen flex items-center justify-center`}>{children}</body>
    </html>
  );
}
