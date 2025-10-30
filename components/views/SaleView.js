"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FileText, FileCode, Package } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function SaleView({
    product = {},
    saleNumber = "",
    date = "",
    buyerName = "",
    shippingData = "",
    shippingData2 = "",
    fiscalNoteNumber = "",
    totalPrice = "",
    shippingRevenue = "",
    shippingCost = "",
    taxes = "",
    total = "",
    profit = "",
    pdfUrl = "",
    xmlUrl = ""
}) {
    const isPdfValid = pdfUrl?.trim();
    const isXmlValid = xmlUrl?.trim();

    return (
        <div className="w-full p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Produto</h1>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        onClick={() => window.location.href = pdfUrl}
                        disabled={!isPdfValid}
                    >
                        <FileText />
                        PDF
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => window.location.href = xmlUrl}
                        disabled={!isXmlValid}
                    >
                        <FileCode />
                        XML
                    </Button>
                </div>
            </div>

            {/* Product Card */}
            <Card>
                <CardHeader>
                    <CardTitle>Produto</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                    <Avatar className="size-16">
                        <AvatarImage src={product.imageUrl} alt={product.name} />
                        <AvatarFallback>
                            <Package />
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 grid grid-cols-3 gap-4">
                        <div>
                            <p className="text-sm text-muted-foreground">Nome</p>
                            <p className="text-sm font-medium">{product.name}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Valor</p>
                            <p className="text-sm font-medium">{product.value}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Quantidade</p>
                            <p className="text-sm font-medium">{product.quantity}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Separator />

            {/* Sale Information */}
            <Card>
                <CardHeader>
                    <CardTitle>Informações da Venda</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <InfoRow label="Número da venda" value={saleNumber} />
                    <InfoRow label="Data" value={date} />
                    <InfoRow label="Apelido comprador" value={buyerName} />
                    <InfoRow label="Dados de envio" value={shippingData} />
                    <InfoRow label="Dados de envio" value={shippingData2} />
                    <InfoRow label="Número da nota fiscal" value={fiscalNoteNumber} />
                </CardContent>
            </Card>

            {/* Financial Summary */}
            <Card>
                <CardHeader>
                    <CardTitle>Resumo Financeiro</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <InfoRow label="Preço total dos produtos" value={totalPrice} />
                    <InfoRow label="Receita por envio" value={shippingRevenue} />
                    <InfoRow label="Custo envio" value={shippingCost} />
                    <InfoRow label="Impostos e tarifas" value={taxes} />
                    <Separator />
                    <InfoRow label="Total" value={total} bold />
                    <InfoRow label="Lucro" value={profit} bold />
                </CardContent>
            </Card>
        </div>
    );
}

function InfoRow({ label, value, bold = false }) {
    return (
        <div className="flex items-center justify-between py-1">
            <span className={`text-sm ${bold ? "font-semibold" : "text-muted-foreground"}`}>
                {label}
            </span>
            <span className={`text-sm ${bold ? "font-semibold" : "font-medium"}`}>
                {value}
            </span>
        </div>
    );
}