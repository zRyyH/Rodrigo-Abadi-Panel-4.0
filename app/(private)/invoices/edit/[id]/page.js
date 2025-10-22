"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import InvoicesForm from "@/components/forms/InvoicesForm";

export default function EditInvoices() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        productName: "",
        quantity: "",
        origin: "",
        ncm: "",
        cest: ""
    });

    const onSubmit = () => {
        console.log("Editar invoice:", formData);
    };

    const onCancel = () => {
        setFormData({
            productName: "",
            quantity: "",
            origin: "",
            ncm: "",
            cest: ""
        });
        router.push("/invoices");
        console.log("Cancelar invoice");
    };

    return (
        <InvoicesForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
            onCancel={onCancel}
        />
    );
}