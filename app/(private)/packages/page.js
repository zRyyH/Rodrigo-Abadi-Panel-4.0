"use client";

import { PackagesTable } from "@/components/tables/PackagesTable";
import { TableSearch } from "@/components/sections/TableSearch";
import { useMutationWithFeedback } from "@/hooks/useMutation";
import { packagesService } from "@/services/packages";
import PageCard from "@/components/common/PageCard";

export default function Packages() {
    const { mutate } = useMutationWithFeedback(packagesService.delete, {
        title: "Delete",
        msg: "Embalagem deletada com sucesso",
        redirect: "/packages",
        invalidateQueryKey: "packages",
    });

    return (
        <div className="gap-4 flex flex-col">
            <PageCard
                title="Embalagens"
                redirect="/packages/create"
                buttonText="Criar Emabalagem"
            />
            <TableSearch service={packagesService} collection={"packages"} >
                <PackagesTable onRemove={(pack) => mutate(pack.id)} />
            </TableSearch>
        </div>
    );
}