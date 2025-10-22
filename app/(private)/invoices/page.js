"use client";

import { InvoicesTable } from "@/components/tables/InvoicesTable";
import { TableSearch } from "@/components/sections/TableSearch";
import { invoicesService } from "@/services/invoices";

export default function Invoices() {
    return (
        <TableSearch collection={"invoices"} service={invoicesService} >
            <InvoicesTable />
        </TableSearch>
    );
}