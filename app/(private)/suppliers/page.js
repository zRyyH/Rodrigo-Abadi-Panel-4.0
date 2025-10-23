"use client";

import { SuppliersTable } from "@/components/tables/SuppliersTable";
import { TableSearch } from "@/components/sections/TableSearch";
import { suppliersService } from "@/services/suppliers";

export default function Sales() {
    return (
        <TableSearch service={suppliersService} collection={"suppliers"} >
            <SuppliersTable />
        </TableSearch>
    );
}