"use client";

import { useRouter } from 'next/navigation';
import { useState } from "react";
import ProductForm from "@/components/forms/ProductForm";

export default function EditProducts() {
    const router = useRouter();
    const [formData, setFormData] = useState({});

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prev) => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setFormData((prev) => ({ ...prev, image: null }));
    };

    function onCancel() {
        setFormData({})
        router.push("/products")
    };

    function onSubmit() {
        console.log(formData)
    };

    const packagingOptions = [
        { value: "box", label: "Caixa" },
        { value: "bag", label: "Sacola" },
    ];

    const supplierOptions = [
        { value: "supplier1", label: "Fornecedor 1" },
        { value: "supplier2", label: "Fornecedor 2" },
    ];

    return (
        <ProductForm
            formData={formData}
            onInputChange={handleInputChange}
            onImageUpload={handleImageUpload}
            onRemoveImage={handleRemoveImage}
            onSubmit={onSubmit}
            onCancel={onCancel}
            packagingOptions={packagingOptions}
            supplierOptions={supplierOptions}
        />
    );
}