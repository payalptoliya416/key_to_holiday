import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KeyToHolidays – Book direct. Pay less.",
  description:
    "Discover handpicked holiday homes, villas, cottages and unique stays. Book direct with trusted hosts and pay less.",
  icons: {
    icon: "/favicon.jpg", 
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
