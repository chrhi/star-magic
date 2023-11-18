"use client";

import Link from "next/link";
import type { FC } from "react";
import { Button } from "./ui/button";
import { AdminSideNavItems } from "@/constants/admin-side-nav";

interface AdminSideBarAbdullahProps {}

const AdminSideBar: FC = ({}) => {
  return (
    <div className="w-full flex flex-col gap-y-4">
      {AdminSideNavItems.map((item) => (
        <Link href={item.url} key={item.name}>
          <Button variant="ghost">{item.name}</Button>
        </Link>
      ))}
    </div>
  );
};

export default AdminSideBar;
