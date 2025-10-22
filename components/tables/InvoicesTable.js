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
import { Trash2 } from "lucide-react";

export function InvoicesTable({ rows, onEdit, onDelete }) {
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
                    {rows.map((product) => (
                        <TableRow
                            key={product.id}
                            onClick={() => onEdit(product)}
                            className="cursor-pointer"
                        >
                            <TableCell className="font-medium">{product.productName}</TableCell>
                            <TableCell>{product.quantity}</TableCell>
                            <TableCell>{product.ncm}</TableCell>
                            <TableCell>{product.cest}</TableCell>
                            <TableCell>{product.origin}</TableCell>
                            <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                                <div className="flex justify-end gap-2">
                                    <Button
                                        variant="ghost"
                                        size="icon-sm"
                                        onClick={() => onDelete(product)}
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