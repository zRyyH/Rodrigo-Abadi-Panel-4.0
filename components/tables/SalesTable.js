"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { EmptyTable } from "./Empty";

export function SalesTable({ rows, onRowClick }) {
    if (rows.length < 1) return <EmptyTable />

    return (
        <Card className="w-full p-3 animate-fadeSlideIn">
            <Table className="table-fixed">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[14.28%]">Número da venda</TableHead>
                        <TableHead className="w-[14.28%]">SKU</TableHead>
                        <TableHead className="w-[14.28%]">Nome do produto</TableHead>
                        <TableHead className="w-[14.28%]">Nome do comprador</TableHead>
                        <TableHead className="w-[14.28%]">Anúncio</TableHead>
                        <TableHead className="w-[14.28%]">Data</TableHead>
                        <TableHead className="w-[14.28%]">Tipo de envio</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={7} className="text-center text-muted-foreground">
                                Nenhuma venda encontrada
                            </TableCell>
                        </TableRow>
                    ) : (
                        rows.map((sale) => (
                            <TableRow
                                key={sale.id}
                                onClick={() => onRowClick?.(sale)}
                                className="cursor-pointer"
                            >
                                <TableCell className="truncate">{sale.sale_id}</TableCell>
                                <TableCell className="truncate">{sale.sku}</TableCell>
                                <TableCell className="truncate">{sale.listing_title}</TableCell>
                                <TableCell className="truncate">{sale.buyer_name}</TableCell>
                                <TableCell className="truncate">{sale.listing_id}</TableCell>
                                <TableCell className="truncate">{sale.formatted_date}</TableCell>
                                <TableCell className="truncate">{sale.delivery_method}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </Card>
    );
}