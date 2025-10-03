import type {Metadata} from 'next';
import { Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import AnimatedCursor from '@/components/custom/animated-cursor';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "HK's Portfolio – From Mechatronics to AI",
  description: 'Personal portfolio of HK - Mechatronics Engineer, Researcher, Startup Founder, and AI Innovation Pioneer preparing for advanced studies in Germany.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <AnimatedCursor />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
