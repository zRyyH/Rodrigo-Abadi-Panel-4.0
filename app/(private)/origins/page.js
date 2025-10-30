"use client";

import { OriginsTable } from "@/components/tables/OriginsTable";
import { TableSearch } from "@/components/sections/TableSearch";
import { useMutationWithFeedback } from "@/hooks/useMutation";
import { originsService } from "@/services/origins";
import PageCard from "@/components/common/PageCard";

export default function Origins() {
    const { mutate } = useMutationWithFeedback(originsService.delete, {
        title: "Delete",
        msg: "Origem deletada com sucesso",
        invalidateQueryKey: "origins",
        redirect: "/origins"
    });

    return (
        <div className="gap-4 flex flex-col">
            <PageCard
                title="Origens"
                redirect="/origins/create"
                buttonText="Criar Origem"
            />
            <TableSearch service={originsService} collection={"origins"} >
                <OriginsTable onRemove={(origin) => mutate(origin.id)} />
            </TableSearch>
        </div>
    );
}