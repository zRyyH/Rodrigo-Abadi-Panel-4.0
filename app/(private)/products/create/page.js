"use client";

import FormManager from "@/components/forms/FormManager";
import ProductForm from "@/components/forms/ProductForm";
import { productsService } from "@/services/products";

export default function CreateProductPage() {
    return (
        <div className="animate-fadeSlideIn" >
            <FormManager
                queryKey="products"
                createFn={productsService.create}
                redirectTo="/products"
                initialData={{
                    sku: "",
                    name: "",
                    quantity: "",
                    purchase_cost: "",
                    package_id: "",
                    supplier_id: "",
                    cest: "",
                    ncm: "",
                    images: [
                        "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
                        "https://images.unsplash.com/photo-1682687221038-404cb8830901",
                    ]
                }}
            >
                <ProductForm />
            </FormManager>
        </div>
    );
}