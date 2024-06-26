import type { Metadata } from "next";
import localFont from "next/font/local";
import StoreProvider from "./StoreProvider";
import "./globals.css";

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
  title: "Movies",
  description: "A Simple Movie App",
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
