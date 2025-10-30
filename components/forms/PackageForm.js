"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PackageForm({ mode = "create", value, formData, setFormData, onSubmit, onCancel }) {
    const isEditMode = mode === "edit";

    return (
        <Card className="animate-fadeSlideIn" >
            <CardHeader>
                <CardTitle>{isEditMode ? "Editar Embalagem" : "Criar Embalagem"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="package">
                        Embalagem <span className="text-destructive">*</span>
                    </Label>
                    <Input
                        id="package"
                        placeholder="Digite a Embalagem..."
                        className="w-full"
                        value={value}
                        onChange={(e) => setFormData({ ...formData, type_of_packaging: e.target.value })}
                    />
                </div>

                <div className="flex gap-3">
                    <Button onClick={onSubmit} className="cursor-pointer">
                        {isEditMode ? "Salvar" : "Criar"}
                    </Button>
                    <Button variant="outline" onClick={onCancel} className="cursor-pointer">
                        Cancelar
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}