"use client";

import { OriginsTable } from "@/components/tables/OriginsTable";
import { TableSearch } from "@/components/sections/TableSearch";
import { originsService } from "@/services/origins";

export default function Packages() {
    return (
        <TableSearch service={originsService} collection={"origins"} >
            <OriginsTable />
        </TableSearch>
    );
}