"use client";

import SuppliersTable from "@/components/tables/SuppliersTable";

export default function Suppliers() {
    const suppliers = [
        {
            id: 1,
            name: "Fornecedor ABC Ltda"
        }
    ]

    function onRemove(supplier) {
        console.log("Deletar fornecedor:", supplier)
    }

    return (
        <SuppliersTable
            suppliers={suppliers}
            onRemove={onRemove}
        />
    )
}