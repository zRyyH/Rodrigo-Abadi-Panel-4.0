"use client";

import FormManager from "@/components/forms/FormManager";
import ProductForm from "@/components/forms/ProductForm";
import { productsService } from "@/services/products";

export default function EditProductPage() {
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
            >
                <ProductForm mode="edit" />
            </FormManager>
        </div>
    );
}