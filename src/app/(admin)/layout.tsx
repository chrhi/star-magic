import { cn, constructMetadata } from "@/lib/utils";
import { Inter } from "next/font/google";
import "../globals.css";

//#ff4500

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function TemporaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
