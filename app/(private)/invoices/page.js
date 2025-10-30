"use client";

import { InvoicesTable } from "@/components/tables/InvoicesTable";
import { TableSearch } from "@/components/sections/TableSearch";
import { useMutationWithFeedback } from "@/hooks/useMutation";
import { invoicesService } from "@/services/invoices";
import PageCard from "@/components/common/PageCard";

export default function Invoices() {
    const { mutate } = useMutationWithFeedback(invoicesService.delete, {
        title: "Delete",
        msg: "Nota deletada com sucesso",
        invalidateQueryKey: "invoices",
    });

    return (
        <div className="gap-4 flex flex-col">
            <PageCard
                title="Notas Fiscais"
                redirect="/invoices/create"
                buttonText="Criar Nota Fiscal"
            />
            <TableSearch collection={"invoices"} service={invoicesService} >
                <InvoicesTable onDelete={(invoice) => mutate(invoice.id)} />
            </TableSearch>
        </div>
    );
}