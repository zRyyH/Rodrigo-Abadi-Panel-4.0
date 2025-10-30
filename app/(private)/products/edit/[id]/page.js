"use client";

import FormManager from "@/components/forms/FormManager";
import ProductForm from "@/components/forms/ProductForm";
import { productsService } from "@/services/products";

export default function CreateProductPage() {
    const packagingOptions = [
        { value: 16, label: "Caixa" },
        { value: 17, label: "Pacote" },
    ];

    const supplierOptions = [
        { value: 12, label: "Fornecedor A Ltda" },
        { value: 14, label: "Fornecedor B S/A" },
        { value: 15, label: "Fornecedor C EIRELI" },
    ];

    return (
        <div className="container mx-auto py-8 animate-fadeSlideIn">
            <FormManager
                queryKey="products"
                createFn={productsService.create}
                redirectTo="/products"
                initialData={{
                    name: "",
                    sku: "",
                    quantity: "",
                    purchase_cost: "",
                    package_id: "",
                    supplier_id: "",
                    cest: "",
                    ncm: "",
                    photo_ids: null
                }}
                onSuccess={(data) => {
                    console.log('Product created successfully:', data);
                }}
                onError={(error) => {
                    console.error('Error creating product:', error);
                }}
            >
                <ProductForm
                    package_idOptions={packagingOptions}
                    supplier_idOptions={supplierOptions}
                    mode="edit"
                />
            </FormManager>
        </div>
    );
}