import Link from "next/link";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import Image from "next/image";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const NoAuthNavBar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full bg-background/75 border-gray-200  dark:border-gray-700 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between ">
          <div className="w-[50%] h-full flex items-center justify-start gap-x-4">
            <div className="flex z-40 font-semibold">
              <Image alt="logo" src="/logo.png" width={35} height={35} />
            </div>
            <Link href={"/form"}>
              <Button variant="ghost">Free Resources</Button>
            </Link>
          </div>
          <div className=" w-[50%] md:w-[25%] h-[60px] gap-x-5 flex justify-end items-center mr-2">
            <ThemeToggle />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NoAuthNavBar;
