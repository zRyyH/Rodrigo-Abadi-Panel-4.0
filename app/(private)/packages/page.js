"use client";

import { PackagesTable } from "@/components/tables/PackagesTable";
import { TableSearch } from "@/components/sections/TableSearch";
import { packagesService } from "@/services/packages";

export default function Packages() {
    return (
        <TableSearch service={packagesService} collection={"packages"} >
            <PackagesTable />
        </TableSearch>
    );
}