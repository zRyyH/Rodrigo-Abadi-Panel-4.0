"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PackageForm({
    formData = {},
    setFormData,
    onSubmit,
    onCancel,
    loading = false,
    mode = "create"
}) {
    const isEditMode = mode === "edit";

    const handleChange = (value) => {
        setFormData({ ...formData, type_of_packaging: value });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>{isEditMode ? "Editar Embalagem" : "Criar Embalagem"}</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={onSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="package">
                            Embalagem <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            id="package"
                            placeholder="Digite a embalagem..."
                            value={formData.type_of_packaging || ""}
                            onChange={(e) => handleChange(e.target.value)}
                            disabled={loading}
                            required
                        />
                    </div>

                    <div className="flex gap-3">
                        <Button type="submit" disabled={loading}>
                            {loading ? "Salvando..." : isEditMode ? "Salvar" : "Criar"}
                        </Button>
                        {onCancel && (
                            <Button type="button" variant="outline" onClick={onCancel} disabled={loading}>
                                Cancelar
                            </Button>
                        )}
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}