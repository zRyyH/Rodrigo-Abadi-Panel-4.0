"use client";

import { FileText, FileCode, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function SaleView({ saleData }) {
    const {
        products = [],
        saleNumber = "",
        date = "",
        buyerName = "",
        shippingData = "",
        shippingData2 = "",
        fiscalNoteNumber = "",
        totalPrice = "",
        salesTariffs = "",
        shippingCost = "",
        taxes = "",
        total = "",
        profit = "",
        pdfUrl = "",
        xmlUrl = "",
    } = saleData || {};

    const isPdfValid = pdfUrl && pdfUrl.trim() !== "";
    const isXmlValid = xmlUrl && xmlUrl.trim() !== "";

    const handlePdfDownload = () => {
        if (isPdfValid) {
            window.open(pdfUrl, "_blank");
        }
    };

    const handleXmlDownload = () => {
        if (isXmlValid) {
            window.open(xmlUrl, "_blank");
        }
    };

    return (
        <div className="w-full p-6 space-y-6 animate-fadeSlideIn">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-foreground">Produtos</h1>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="default"
                        onClick={handlePdfDownload}
                        disabled={!isPdfValid}
                        className="gap-2"
                    >
                        <FileText className="size-4" />
                        PDF
                    </Button>
                    <Button
                        variant="outline"
                        size="default"
                        onClick={handleXmlDownload}
                        disabled={!isXmlValid}
                        className="gap-2"
                    >
                        <FileCode className="size-4" />
                        XML
                    </Button>
                </div>
            </div>

            {/* Products Table */}
            <Card>
                <CardContent className="p-0">
                    <div className="bg-muted/30 border-b">
                        <div className="grid grid-cols-[80px_2fr_1fr_1fr] gap-6 px-6 py-3">
                            <div className="text-sm font-medium text-muted-foreground">
                                Foto
                            </div>
                            <div className="text-sm font-medium text-muted-foreground">
                                Nome do produto
                            </div>
                            <div className="text-sm font-medium text-muted-foreground">
                                Valor
                            </div>
                            <div className="text-sm font-medium text-muted-foreground">
                                Quantidade
                            </div>
                        </div>
                    </div>
                    {products.length > 0 ? (
                        products.map((product, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-[80px_2fr_1fr_1fr] gap-6 px-6 py-3 border-b last:border-b-0 items-center hover:bg-muted/20 transition-colors"
                            >
                                <div className="bg-muted rounded-md h-16 w-16 overflow-hidden flex items-center justify-center flex-shrink-0">
                                    {product.imageUrl ? (
                                        <img
                                            src={product.imageUrl}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <Package className="size-6 text-muted-foreground" />
                                    )}
                                </div>
                                <div className="text-sm text-foreground">{product.name}</div>
                                <div className="text-sm text-foreground">{product.value}</div>
                                <div className="text-sm text-foreground">{product.quantity}</div>
                            </div>
                        ))
                    ) : (
                        <div className="p-8 text-center text-sm text-muted-foreground">
                            Nenhum produto cadastrado
                        </div>
                    )}
                </CardContent>
            </Card>

            <Separator />

            {/* Sale Information */}
            <div className="space-y-3">
                <div className="flex items-center justify-between py-1.5">
                    <span className="text-sm text-muted-foreground">Número da venda</span>
                    <span className="text-sm text-foreground font-medium">{saleNumber}</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                    <span className="text-sm text-muted-foreground">Data</span>
                    <span className="text-sm text-foreground font-medium">{date}</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                    <span className="text-sm text-muted-foreground">Apelido comprador</span>
                    <span className="text-sm text-foreground font-medium">{buyerName}</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                    <span className="text-sm text-muted-foreground">Dados de envio</span>
                    <span className="text-sm text-foreground font-medium">{shippingData}</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                    <span className="text-sm text-muted-foreground">Dados de envio</span>
                    <span className="text-sm text-foreground font-medium">{shippingData2}</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                    <span className="text-sm text-muted-foreground">Número da nota fiscal</span>
                    <span className="text-sm text-foreground font-medium">{fiscalNoteNumber}</span>
                </div>
            </div>

            <Separator />

            {/* Financial Summary */}
            <div className="space-y-3">
                <div className="flex items-center justify-between py-1.5">
                    <span className="text-sm text-muted-foreground">Preço total dos produtos</span>
                    <span className="text-sm text-foreground font-medium">{totalPrice}</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                    <span className="text-sm text-muted-foreground">Tarifas de venda</span>
                    <span className="text-sm text-foreground font-medium">{salesTariffs}</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                    <span className="text-sm text-muted-foreground">Custo envio</span>
                    <span className="text-sm text-foreground font-medium">{shippingCost}</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                    <span className="text-sm text-muted-foreground">Impostos</span>
                    <span className="text-sm text-foreground font-medium">{taxes}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-t pt-3">
                    <span className="text-sm font-semibold text-foreground">Total</span>
                    <span className="text-sm font-semibold text-foreground">{total}</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                    <span className="text-sm font-semibold text-foreground">Lucro</span>
                    <span className="text-sm font-semibold text-foreground">{profit}</span>
                </div>
            </div>
        </div>
    );
}