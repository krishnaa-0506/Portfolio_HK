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
  title: 'Sparklefolio | Hk - Creative Developer & Designer',
  description: 'Personal portfolio of Hk, a creative developer and designer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AnimatedCursor />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
