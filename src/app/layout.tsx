import type { Metadata } from "next";
import "./globals.css";
import GlobalTorchCursor from "@/components/GlobalTorchCursor";

export const metadata: Metadata = {
  title: "Zunno.ai - Where AI Meets Academic Excellence",
  description: "Transform your child into a confident competitor with AI-powered personalized learning that adapts to their unique potential. Every child deserves a brain, and we are building it.",
  keywords: "AI education, personalized learning, EdTech, student competitions, academic excellence, children learning, AI tutor",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased cursor-none">
        <GlobalTorchCursor />
        {children}
      </body>
    </html>
  );
}
