"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup } from "@/components/ui/field";

export default function InvoicesForm({
    formData = {},
    setFormData,
    onSubmit,
    onCancel,
    loading = false,
    originOptions = []
}) {
    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Criar Notas</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={onSubmit} className="space-y-6">
                    <FieldGroup>
                        <div className="space-y-2">
                            <Label htmlFor="product_name">
                                Nome do produto <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                id="product_name"
                                placeholder="Digite o nome do produto..."
                                value={formData.product_name || ""}
                                onChange={(e) => handleChange("product_name", e.target.value)}
                                disabled={loading}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="quantity">
                                Quantidade <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                id="quantity"
                                type="number"
                                placeholder="Digite a quantidade..."
                                value={formData.quantity || ""}
                                onChange={(e) => handleChange("quantity", e.target.value)}
                                disabled={loading}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="origin_id">
                                Origem <span className="text-destructive">*</span>
                            </Label>
                            <Select
                                value={formData.origin_id?.toString() || ""}
                                onValueChange={(value) => handleChange("origin_id", value)}
                                disabled={loading}
                                required
                            >
                                <SelectTrigger id="origin_id">
                                    <SelectValue placeholder="Selecionar origem..." />
                                </SelectTrigger>
                                <SelectContent>
                                    {originOptions.length > 0 ? (
                                        originOptions.map((option) => (
                                            <SelectItem key={option.value} value={option.value.toString()}>
                                                {option.label}
                                            </SelectItem>
                                        ))
                                    ) : (
                                        <>
                                            <SelectItem value="36">Nacional</SelectItem>
                                            <SelectItem value="37">Importado</SelectItem>
                                        </>
                                    )}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="ncm">
                                NCM <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                id="ncm"
                                placeholder="Digite o NCM..."
                                value={formData.ncm || ""}
                                onChange={(e) => handleChange("ncm", e.target.value)}
                                disabled={loading}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="cest">
                                CEST <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                id="cest"
                                placeholder="Digite o CEST..."
                                value={formData.cest || ""}
                                onChange={(e) => handleChange("cest", e.target.value)}
                                disabled={loading}
                                required
                            />
                        </div>
                    </FieldGroup>

                    <div className="flex gap-2">
                        <Button type="submit" disabled={loading}>
                            {loading ? "Criando..." : "Criar"}
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