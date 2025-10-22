"use client";

import { TableSearch } from "@/components/sections/TableSearch";
import { NfesTable } from "@/components/tables/NfesTable";
import { nfesService } from "@/services/nfes";

export default function Sales() {
    function onDownload(url) {
        window.location.href = url
    }

    return (
        <TableSearch service={nfesService} collection={"nfes"} >
            <NfesTable onDownloadPdf={onDownload} onDownloadXml={onDownload} />
        </TableSearch>
    );
}