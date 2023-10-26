import Image from "next/image";
import Link from "next/link";

// import { siteConfig } from "@/config/site"
// import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Icons } from "@/components/icons";
import { cn, constructMetadata } from "@/lib/utils";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="light">
      <main className=" w-full flex items-center justify-center h-screen">
        {children}
      </main>
    </div>
  );
}
