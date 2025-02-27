import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <Analytics />
        <SpeedInsights />
        <NavBar />
        <Toaster />
        <div className="flex flex-col justify-center items-center pt-20 mb-5">
          <InBetaRelease />
          {children}
        </div>
        {/* <div className="flex justify-center items-center pt-20 mb-5">
          {children}
        </div> */}
        <Footer />
      </body>
    </html>
  );
}

const InBetaRelease = () => {
  return (
    <div className=" flex flex-col font-bold items-center justify-center text-3xl py-6 bg-red-500/20">
      <div>This is in development mode. Please do not share this link. 🚧</div>
      <div className=" text-muted-foreground">
        Also Don&apos;t expect it to work as expected
      </div>
      <Link href="https://github.com/synthAI-Labs/WebClient-OpenEdu/blob/main/ProjectDetails.md">
        <Button className="mt-4">View Project Details</Button>
      </Link>
    </div>
  );
};
