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
    origins = []
}) {
    return (
        <Card className="animate-fadeSlideIn">
            <CardHeader>
                <CardTitle>Criar Notas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="productName">
                            Nome do produto <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            id="productName"
                            placeholder="Digite o nome do produto..."
                            className="w-full"
                            value={formData.productName || ""}
                            onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
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
                        <Label htmlFor="origin">
                            Origem <span className="text-destructive">*</span>
                        </Label>
                        <Select
                            value={formData.origin || ""}
                            onValueChange={(value) => setFormData({ ...formData, origin: value })}
                        >
                            <SelectTrigger id="origin" className="w-[180px]">
                                <SelectValue placeholder="Selecionar item..." />
                            </SelectTrigger>
                            <SelectContent>
                                {origins.length > 0 ? (
                                    origins.map((origin) => (
                                        <SelectItem key={origin.value} value={origin.value}>
                                            {origin.label}
                                        </SelectItem>
                                    ))
                                ) : (
                                    <>
                                        <SelectItem value="nacional">Nacional</SelectItem>
                                        <SelectItem value="importado">Importado</SelectItem>
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
                    <Button onClick={onSubmit}>
                        Criar
                    </Button>
                    <Button variant="outline" onClick={onCancel}>
                        Cancelar
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}