import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LightRays from "@/components/LightRays";
import NavWrapper from "@/components/NavWrapper";
import ClickSpark from "@/components/ClickSpark";
import TargetCursor from "@/components/TargetCursor";
import Link from "next/link";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdullah Hassan | Software Engineer & Web Developer",
  description: "Full-stack developer specializing in React, Next.js, and modern web technologies. Building interactive, scalable web applications with clean design and solid backend logic.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        {/* Background */}
        <div className="fixed inset-0 -z-10">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.8}
            followMouse={true}
            mouseInfluence={0.5}
            noiseAmount={0.5}
            distortion={0.05}
            className="opacity-80"
          />
        </div>

        {/* Navigation */}
        <header className="relative z-20 flex justify-center py-3 backdrop-blur-md/">
          <NavWrapper />
        </header>

        {/* Page Content */}
        <main className="relative z-10">
          <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
            {children}
          </ClickSpark>
        </main>
        <Footer />
      </body>
    </html>
  );
}
