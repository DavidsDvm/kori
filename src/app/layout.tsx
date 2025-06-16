"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from 'react-hot-toast'
import FlashToastEffect from "@/components/layout/flash-toast-effect";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const metadata: Metadata = {
  title: "Kori - Turn Your MetaMask Debit Card into Credit",
  description: "The on-chain engine that turns every MetaMask debit card into a true revolving credit card—while merchants get paid in seconds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className={`${inter.className} h-full bg-white`}>
        <Providers>
          <FlashToastEffect />
          <div className="min-h-full">
            <Navbar />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                style: {
                  background: '#22c55e',
                },
              },
              error: {
                duration: 3000,
                style: {
                  background: '#ef4444',
                },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
