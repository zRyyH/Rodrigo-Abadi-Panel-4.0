"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UploadIcon, XIcon } from "lucide-react";

export default function ProductForm({
    formData = {},
    setFormData,
    onSubmit,
    onCancel,
    loading = false,
    mode = "create",
    packagingOptions = [],
    supplierOptions = []
}) {
    const isEditMode = mode === "edit";

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                handleChange("image", reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        handleChange("image", null);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>{isEditMode ? "Editar Produto" : "Criar Produto"}</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Left Column - Form Fields */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="productName">
                                    Nome do produto <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                    id="productName"
                                    placeholder="Digite o nome do produto..."
                                    value={formData.productName || ""}
                                    onChange={(e) => handleChange("productName", e.target.value)}
                                    disabled={loading}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="sku">
                                    SKU <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                    id="sku"
                                    placeholder="Digite o SKU..."
                                    value={formData.sku || ""}
                                    onChange={(e) => handleChange("sku", e.target.value)}
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
                                <Label htmlFor="cost">
                                    Custo <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                    id="cost"
                                    type="number"
                                    step="0.01"
                                    placeholder="Digite o custo..."
                                    value={formData.cost || ""}
                                    onChange={(e) => handleChange("cost", e.target.value)}
                                    disabled={loading}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="packaging">
                                    Embalagem <span className="text-destructive">*</span>
                                </Label>
                                <Select
                                    value={formData.packaging?.toString() || ""}
                                    onValueChange={(value) => handleChange("packaging", value)}
                                    disabled={loading}
                                    required
                                >
                                    <SelectTrigger id="packaging">
                                        <SelectValue placeholder="Selecionar embalagem..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {packagingOptions.map((option) => (
                                            <SelectItem key={option.value} value={option.value.toString()}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="supplier">
                                    Fornecedor <span className="text-destructive">*</span>
                                </Label>
                                <Select
                                    value={formData.supplier?.toString() || ""}
                                    onValueChange={(value) => handleChange("supplier", value)}
                                    disabled={loading}
                                    required
                                >
                                    <SelectTrigger id="supplier">
                                        <SelectValue placeholder="Selecionar fornecedor..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {supplierOptions.map((option) => (
                                            <SelectItem key={option.value} value={option.value.toString()}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
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
                        </div>

                        {/* Right Column - Image Upload */}
                        <div className="space-y-2">
                            <Label>Imagem do produto</Label>
                            <div className="relative">
                                {formData.image ? (
                                    <div className="relative h-64 overflow-hidden rounded-lg border-2 border-border">
                                        <img
                                            src={formData.image}
                                            alt="Preview"
                                            className="size-full object-cover"
                                        />
                                        <Button
                                            type="button"
                                            size="icon"
                                            variant="destructive"
                                            className="absolute top-2 right-2"
                                            onClick={handleRemoveImage}
                                            disabled={loading}
                                        >
                                            <XIcon className="size-4" />
                                        </Button>
                                    </div>
                                ) : (
                                    <label
                                        htmlFor="image-upload"
                                        className="flex h-64 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border transition-colors hover:border-primary"
                                    >
                                        <UploadIcon className="mb-4 size-12 text-muted-foreground" />
                                        <p className="text-sm text-muted-foreground">
                                            Clique para adicionar imagem
                                        </p>
                                        <input
                                            id="image-upload"
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleImageUpload}
                                            disabled={loading}
                                        />
                                    </label>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
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