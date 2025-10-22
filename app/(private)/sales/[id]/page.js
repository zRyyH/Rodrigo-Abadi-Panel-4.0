"use client";

import { useState } from "react";
import SaleView from "@/components/views/SaleView";

export default function App() {
    const [saleData, setSaleData] = useState({
        products: [
            { name: "Produto A", value: "R$ 100,00", quantity: "2", imageUrl: "https://manager.awpsoft.com.br/assets/9042fb33-281b-44b0-b149-e945c8e51d35" },
            { name: "Produto B", value: "R$ 50,00", quantity: "1", imageUrl: "" }
        ],
        saleNumber: "#12345",
        date: "20/10/2025",
        buyerName: "João Silva",
        shippingData: "Rua X, 123",
        shippingData2: "São Paulo - SP",
        fiscalNoteNumber: "NF-67890",
        totalPrice: "R$ 250,00",
        salesTariffs: "R$ 25,00",
        shippingCost: "R$ 15,00",
        taxes: "R$ 30,00",
        total: "R$ 320,00",
        profit: "R$ 100,00",
        pdfUrl: "https://example.com/download.pdf",
        xmlUrl: null,
    });

    return (
        <SaleView saleData={saleData} />
    )
}