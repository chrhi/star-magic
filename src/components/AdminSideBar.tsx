"use client";

import Link from "next/link";
import type { FC } from "react";
import { Button, buttonVariants } from "./ui/button";
import { AdminSideNavItems } from "@/constants/admin-side-nav";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface AdminSideBarAbdullahProps {}

const AdminSideBar: FC = ({}) => {
  const pathname = usePathname();

  return (
    <div className="w-full flex flex-col gap-y-4">
      {AdminSideNavItems.map((item) => {
        const isTheRouteActive = pathname === item.url;
        return (
          <Link href={item.url} key={item.name}>
            <Button
              className={cn(
                buttonVariants({ variant: "ghost" }),
                `text-lg pl-2 rounded-lg transition-all hover:transform-gpu w-[80%] h-12  font-medium text-zinc-700 dark:text-zinc-300 text-start flex items-center md:justify-center lg:justify-start gap-x-4
                ${
                  isTheRouteActive
                    ? "bg-gray-50 text-black dark:text-white dark:bg-zinc-900"
                    : ""
                }`
              )}
            >
              {item.name}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default AdminSideBar;
