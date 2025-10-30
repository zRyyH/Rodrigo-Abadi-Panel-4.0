"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from 'next/navigation';
import { Trash2 } from "lucide-react";
import { EmptyTable } from "./Empty";
import { TableLoading } from "@/components/common/TableLoading";

export function InvoicesTable({ rows, onDelete, loading }) {
    const router = useRouter();

    if (loading) {
        return <TableLoading columns={[]} message="Carregando..." />;
    }

    if (rows.length < 1) return <EmptyTable />

    return (
        <Card className="w-full p-3 animate-fadeSlideIn" >
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Produto</TableHead>
                        <TableHead>Quantidade</TableHead>
                        <TableHead>NCM</TableHead>
                        <TableHead>CEST</TableHead>
                        <TableHead>Origem</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.map((invoice) => (
                        <TableRow
                            key={invoice.id}
                            onClick={() => router.push(`/invoices/edit/${invoice.id}`)}
                            className="cursor-pointer"
                        >
                            <TableCell className="font-medium">{invoice.product_name}</TableCell>
                            <TableCell>{invoice.quantity}</TableCell>
                            <TableCell>{invoice.ncm}</TableCell>
                            <TableCell>{invoice.cest}</TableCell>
                            <TableCell>{invoice.origin_id}</TableCell>
                            <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                                <div className="flex justify-end gap-2">
                                    <Button
                                        variant="ghost"
                                        size="icon-sm"
                                        onClick={() => onDelete(invoice)}
                                    >
                                        <Trash2 />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
}