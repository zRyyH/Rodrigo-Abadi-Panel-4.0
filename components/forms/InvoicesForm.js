"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function InvoicesForm({
    formData,
    setFormData,
    onSubmit,
    onCancel,
    origin_ids = []
}) {
    return (
        <Card className="animate-fadeSlideIn">
            <CardHeader>
                <CardTitle>Criar Notas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="product_name">
                            Nome do produto <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            id="product_name"
                            placeholder="Digite o nome do produto..."
                            className="w-full"
                            value={formData.product_name || ""}
                            onChange={(e) => setFormData({ ...formData, product_name: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="quantity">
                            Quantidade <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            id="quantity"
                            placeholder="Digite a quantidade..."
                            className="w-full"
                            value={formData.quantity || ""}
                            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="origin_id">
                            Origem <span className="text-destructive">*</span>
                        </Label>
                        <Select
                            value={formData.origin_id || ""}
                            onValueChange={(value) => setFormData({ ...formData, origin_id: value })}
                        >
                            <SelectTrigger id="origin_id" className="w-[180px]">
                                <SelectValue placeholder="Selecionar item..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={36}>Nacional</SelectItem>
                                <SelectItem value={37}>Importado</SelectItem>
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
                            className="w-full"
                            value={formData.ncm || ""}
                            onChange={(e) => setFormData({ ...formData, ncm: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="cest">
                            CEST <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            id="cest"
                            placeholder="Digite o CEST..."
                            className="w-full"
                            value={formData.cest || ""}
                            onChange={(e) => setFormData({ ...formData, cest: e.target.value })}
                        />
                    </div>
                </div>

                <div className="flex gap-2">
                    <Button onClick={onSubmit} className="cursor-pointer">
                        Criar
                    </Button>
                    <Button variant="outline" onClick={onCancel} className="cursor-pointer">
                        Cancelar
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}