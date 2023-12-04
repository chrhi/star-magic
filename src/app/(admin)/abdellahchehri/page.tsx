import type { FC } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Prisma } from "@prisma/client";
import { db } from "@/lib/db";

const page: FC = async ({}) => {
  const data = await db.customer.findMany();
  return (
    <div>
      <DataTable data={data} columns={columns} />
    </div>
  );
};

export default page;
