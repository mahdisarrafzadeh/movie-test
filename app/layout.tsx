import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import StoreProvider from "./StoreProvider";

const inter = localFont({
  src: [
    {
      path: "../assets/fonts/Shabnam-Light-FD.woff2",
      weight: "400",
      style: "light",
    },
    {
      path: "../assets/fonts/Shabnam-Medium-FD.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Shabnam-Bold-FD.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});

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
    <html lang="en" dir="rtl">
      <StoreProvider>
        <body className={inter.className}>{children}</body>
      </StoreProvider>
    </html>
  );
}
