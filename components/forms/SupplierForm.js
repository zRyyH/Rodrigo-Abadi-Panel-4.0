"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SupplierForm({ mode = "create", value, onChange, onSubmit, onCancel }) {
    const isEditMode = mode === "edit";

    return (
        <Card className="animate-fadeSlideIn" >
            <CardHeader>
                <CardTitle>{isEditMode ? "Editar Fornecedor" : "Criar Fornecedor"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="supplier">
                        Fornecedor <span className="text-destructive">*</span>
                    </Label>
                    <Input
                        id="supplier"
                        placeholder="Digite a Fornecedor..."
                        className="w-full"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                    />
                </div>

                <div className="flex gap-3">
                    <Button onClick={onSubmit}>
                        {isEditMode ? "Salvar" : "Criar"}
                    </Button>
                    <Button variant="outline" onClick={onCancel}>
                        Cancelar
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}