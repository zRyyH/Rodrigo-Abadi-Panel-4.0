"use client";

import { TableSearch } from "@/components/sections/TableSearch";
import { SalesTable } from "@/components/tables/SalesTable";
import { salesService } from "@/services/sales";

export default function Sales() {
    return (
        <TableSearch service={salesService} collection={"sales"} >
            <SalesTable />
        </TableSearch>
    );
}