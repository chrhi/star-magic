import Link from "next/link";
import MaxWidthWrapper from "../../MaxWidthWrapper";

import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const LnadingPageNav = () => {
  return (
    <nav className="sticky h-20 inset-x-0 top-0 z-30 w-full  border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-20 items-center justify-between  border-zinc-200">
          <div className="w-[50%] h-full flex items-center justify-start gap-x-4">
            <Link href="/" prefetch={false} className="flex z-40 font-semibold">
              <Image alt="logo" src="/logo.png" width={45} height={45} />
            </Link>
          </div>
          <div className=" w-[50%]  h-[60px] gap-x-5 flex justify-end items-center mr-2">
            <Link
              className={buttonVariants({ variant: "ghost" })}
              href="/pricing"
            >
              pricing
            </Link>
            <Link
              className={buttonVariants({ variant: "ghost" })}
              href="/signin"
            >
              sign in
            </Link>

            <Link className={buttonVariants({})} href="/dashboard">
              Get started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default LnadingPageNav;
