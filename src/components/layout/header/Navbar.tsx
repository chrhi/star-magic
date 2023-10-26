import Link from "next/link";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import { buttonVariants } from "../../ui/button";

import { ArrowRight } from "lucide-react";

import MobileNav from "./MobileNav";
import Image from "next/image";
import { PagesNav } from "./PagesNav";
import SearchBar from "./dropDown/SearchBar";
import MessageNofinications from "./dropDown/MessageNofinications";
import TaskNotifictions from "./dropDown/TaskNotifictions";

import DropDowsMenu from "./dropDown/user-nav";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <div className="w-[50%] h-full flex items-center justify-start gap-x-4">
            <Link href="/" prefetch={false} className="flex z-40 font-semibold">
              <Image alt="logo" src="/logo.png" width={35} height={35} />
            </Link>
            <PagesNav />
          </div>
          <div className=" w-[50%] md:w-[25%] h-[60px] gap-x-5 flex justify-end items-center mr-2">
            <SearchBar />
            <MessageNofinications />
            <TaskNotifictions />

            <DropDowsMenu />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
