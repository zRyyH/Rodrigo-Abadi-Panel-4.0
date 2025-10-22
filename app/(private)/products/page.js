"use client";

import { TableSearch } from "@/components/sections/TableSearch";
import { ProductsTable } from "@/components/tables/ProductsTable";
import { productsService } from "@/services/products";

export default function Sales() {
    return (
        <TableSearch service={productsService} collection={"products"} >
            <ProductsTable />
        </TableSearch>
    );
}