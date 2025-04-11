import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "react-image-lightbox/style.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const convoy = localFont({
  src: [
    {
      path: "../public/fonts/Convoy.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ConvoyBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-convoy",
  display: "swap",
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
    <html lang="en">
      <body className={`${poppins.variable} ${convoy.variable}`}>{children}</body>
    </html>
  );
}
