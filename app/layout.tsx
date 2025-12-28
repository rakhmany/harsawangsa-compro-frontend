import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./components/BootstrapClient";


const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Harsawangsa",
  description: "Company Profile Harsawangsa",
  icons: {
    icon: "/harsawangsa-orange-square.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/icons.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />      
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
