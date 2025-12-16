import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkillersET - Learn to Code. Build Your Skills. Transform Your Career.",
  description: "Comprehensive online learning platform for programming and software development. Learn Python, JavaScript, Java, C++, React, and more with interactive tutorials and practice problems.",
  keywords: "programming, coding, tutorials, learn to code, web development, software development, programming languages",
  authors: [{ name: "SkillersET" }],
  openGraph: {
    title: "SkillersET - Learn to Code",
    description: "Learn to Code. Build Your Skills. Transform Your Career.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
