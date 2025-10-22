"use client";

import PackagesTable from "@/components/tables/PackagesTable";

export default function Packages() {
    const packs = [
        {
            id: 1,
            type_of_packaging: "Embalagem ABC Ltda"
        }
    ]

    function onRemove(pack) {
        console.log("Deletar embalagem:", pack)
    }

    return (
        <PackagesTable
            packs={packs}
            onRemove={onRemove}
        />
    )
}