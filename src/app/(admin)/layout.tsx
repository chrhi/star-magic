import { constructMetadata } from "@/lib/utils";
import { Inter } from "next/font/google";
import "../globals.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AdminSideBar from "@/components/AdminSideBar";

//#ff4500

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function TemporaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MaxWidthWrapper className="flex p-4 justify-center w-full min-h-full h-fit">
      <aside className="w-[20%] py-6   h-full ">
        <AdminSideBar />
      </aside>
      <main className="w-[80%] h-full">{children}</main>
    </MaxWidthWrapper>
  );
}
