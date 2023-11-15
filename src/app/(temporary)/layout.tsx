import Providers from "@/components/Providers";
import { cn, constructMetadata } from "@/lib/utils";
import { Inter } from "next/font/google";
import "../globals.css";

//#ff4500

import { Toaster } from "@/components/ui/toaster";
import NoAuthNavBar from "@/components/layout/header/NoAuthNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <Providers>
        <body
          className={cn("min-h-screen font-sans antialiased ", inter.className)}
        >
          <NoAuthNavBar />
          {children}
          <Toaster />
        </body>
      </Providers>
    </html>
  );
}
