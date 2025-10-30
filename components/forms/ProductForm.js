"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, X } from "lucide-react";

export default function ProductForm({
    formData,
    onInputChange,
    onImageUpload,
    onRemoveImage,
    onSubmit,
    onCancel,
    packagingOptions = [],
    supplierOptions = [],
}) {
    return (
        <Card className="animate-fadeSlideIn" >
            <CardHeader>
                <CardTitle>Criar Produto</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Coluna Esquerda */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="productName">
                                Nome do produto <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                id="productName"
                                placeholder="Digite o nome do produto..."
                                value={formData.productName || ""}
                                onChange={(e) =>
                                    onInputChange("productName", e.target.value)
                                }
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
                                onChange={(e) => onInputChange("sku", e.target.value)}
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
                                onChange={(e) =>
                                    onInputChange("quantity", e.target.value)
                                }
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="cost">
                                Custo <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                id="cost"
                                type="number"
                                placeholder="Digite o custo..."
                                value={formData.cost || ""}
                                onChange={(e) => onInputChange("cost", e.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="packaging">
                                Embalagens <span className="text-destructive">*</span>
                            </Label>
                            <Select
                                value={formData.packaging || ""}
                                onValueChange={(value) =>
                                    onInputChange("packaging", value)
                                }
                            >
                                <SelectTrigger id="packaging">
                                    <SelectValue placeholder="Selecionar item..." />
                                </SelectTrigger>
                                <SelectContent>
                                    {packagingOptions.map((option) => (
                                        <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="supplier">
                                Fornecedores <span className="text-destructive">*</span>
                            </Label>
                            <Select
                                value={formData.supplier || ""}
                                onValueChange={(value) =>
                                    onInputChange("supplier", value)
                                }
                            >
                                <SelectTrigger id="supplier">
                                    <SelectValue placeholder="Selecionar item..." />
                                </SelectTrigger>
                                <SelectContent>
                                    {supplierOptions.map((option) => (
                                        <SelectItem key={option.value} value={option.value}>
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
                                onChange={(e) => onInputChange("cest", e.target.value)}
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
                                onChange={(e) => onInputChange("ncm", e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Coluna Direita - Upload de Imagem */}
                    <div className="space-y-2">
                        <Label>Imagens</Label>
                        <p className="text-sm text-muted-foreground">Foto</p>
                        <div className="relative">
                            {formData.image ? (
                                <div className="relative h-64 overflow-hidden rounded-lg border-2 border-border">
                                    <img
                                        src={formData.image}
                                        alt="Preview"
                                        className="size-full object-cover"
                                    />
                                    <Button
                                        size="icon"
                                        variant="destructive"
                                        className="absolute top-2 right-2"
                                        onClick={onRemoveImage}
                                    >
                                        <X className="size-4" />
                                    </Button>
                                </div>
                            ) : (
                                <label
                                    htmlFor="image-upload"
                                    className="flex h-64 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border transition-colors hover:border-primary"
                                >
                                    <Upload className="mb-4 size-12 text-muted-foreground" />
                                    <p className="text-sm text-muted-foreground">
                                        Clique para adicionar imagem
                                    </p>
                                    <input
                                        id="image-upload"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={onImageUpload}
                                    />
                                </label>
                            )}
                        </div>
                    </div>
                </div>

                {/* Botões de Ação */}
                <div className="mt-6 flex gap-4">
                    <Button onClick={onSubmit} className="cursor-pointer">Criar</Button >
                    <Button variant="outline" onClick={onCancel} className="cursor-pointer">
                        Cancelar
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}