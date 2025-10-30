"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OriginForm({ mode = "create", formData, setFormData, onSubmit, onCancel }) {
    const isEditMode = mode === "edit";

    return (
        <Card className="animate-fadeSlideIn" >
            <CardHeader>
                <CardTitle>{isEditMode ? "Editar Origem" : "Criar Origem"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="origin">
                        Origem <span className="text-destructive">*</span>
                    </Label>
                    <Input
                        id="origin"
                        placeholder="Digite a Origem..."
                        className="w-full"
                        value={formData.origin || ""}
                        onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
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