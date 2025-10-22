"use client";

import OriginsTable from "@/components/tables/OriginsTable";

export default function Origins() {
    const origins = [
        {
            id: 1,
            origin: "Fornecedor ABC Ltda"
        }
    ]

    function onRemove(origin) {
        console.log("Deletar origin:", origin)
    }

    return (
        <OriginsTable
            origins={origins}
            onRemove={onRemove}
        />
    )
}