"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import SupplierForm from "@/components/forms/SupplierForm";

export default function CreateSupplier() {
    const router = useRouter()
    const [supplier, setSupplier] = useState("");

    function onSubmit() {
        console.log("Criar:", supplier)
    }

    function onCancel() {
        console.log("Cancelar:", supplier)
        setSupplier("")
        router.push("/suppliers")
    }

    return (
        <div className="p-8">
            <SupplierForm
                mode="create"
                value={supplier}
                onChange={setSupplier}
                onSubmit={onSubmit}
                onCancel={onCancel}
            />
        </div>
    );
}