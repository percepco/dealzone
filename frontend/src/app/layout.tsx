import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DealDash® - Bid & Save - Where deals come true!",
  description: "Bid on online auctions and save. All auctions start at $0 with no minimum reserve. Everything must go! DealDash is the fair and honest bidding site where deals come true!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${inter.className} bg-gray-200`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
