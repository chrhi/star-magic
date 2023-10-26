"use client";

/*
 * Import necessary dependencies and components.
 * Abdullah Chehri created this PagesNav component to represent the navigation bar for the pages.
 * Email: mahdi.chahri55@gmail.com
 */

import { Button } from "../../ui/button";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../../ui/button";

/*
 * PagesNav component represents the navigation bar for the pages.
 * It was created by Abdullah Chehri.
 * Email: mahdi.chahri55@gmail.com
 */
export function PagesNav() {
  // List of pages and their paths
  const LIST = [
    {
      name: "Home",
      path: "/app",
    },
    {
      name: "Products",
      path: "/app/chat",
    },
    {
      name: "Orders",
      path: "/app/project",
    },
    {
      name: "WebSite",
      path: "/app/tasks",
    },
  ];

  return (
    /*
     * Main container for the PagesNav component.
     * Includes a list of buttons for each page in the navigation.
     */
    <div className="w-[70%] h-full hidden lg:flex justify-start items-center gap-x-6">
      {LIST.map((item, index) => {
        return (
          <Button
            variant="ghost"
            key={item.name}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              `text-[#64748B] dark:text-gray-100  font-medium text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-stone-800 dark:active:bg-stone-700`
            )}
          >
            {item.name}
          </Button>
        );
      })}
    </div>
  );
}
