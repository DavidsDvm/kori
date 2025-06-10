import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Kori - Turn Your MetaMask Debit Card into Credit",
  description: "The on-chain engine that turns every MetaMask debit card into a true revolving credit card—while merchants get paid in seconds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-kori-950 to-kori-900 text-white">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
