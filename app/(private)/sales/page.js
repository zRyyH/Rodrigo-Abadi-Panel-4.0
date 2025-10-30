"use client";

import { TableSearch } from "@/components/sections/TableSearch";
import { SalesTable } from "@/components/tables/SalesTable";
import PageCard from "@/components/common/PageCard";
import { salesService } from "@/services/sales";
import { useRouter } from 'next/navigation';

export default function Sales() {
    const router = useRouter();

    function onRowClick(sale) {
        router.push(`/sales/${sale.id}`)
    }

    return (
        <div className="gap-4 flex flex-col animate-fadeSlideIn">
            <PageCard
                title="Vendas"
                redirect="/upload"
                buttonText="Criar Venda"
            />

            <TableSearch service={salesService} collection={"sales"} >
                <SalesTable onRowClick={onRowClick} />
            </TableSearch>
        </div>
    );
}