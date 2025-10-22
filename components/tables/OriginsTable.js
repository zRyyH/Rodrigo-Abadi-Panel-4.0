"use client";

import { Trash2 } from "lucide-react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card";

export function OriginsTable({ rows, onRemove }) {
    return (
        <Card className="w-full p-3 animate-fadeSlideIn" >
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Origem</TableHead>
                        <TableHead className="w-[100px] text-right">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.map((origin) => (
                        <TableRow
                            key={origin.id}
                            className="cursor-pointer"
                        >
                            <TableCell className="font-medium">{origin.origin}</TableCell>
                            <TableCell className="text-right">
                                <Button
                                    variant="ghost"
                                    size="icon-sm"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        onRemove(origin)
                                    }}
                                    aria-label="Remover origem"
                                >
                                    <Trash2 className="size-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
}