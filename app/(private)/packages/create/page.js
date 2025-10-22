"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import PackageForm from "@/components/forms/PackageForm";

export default function CreatePackage() {
    const router = useRouter()
    const [pack, setPackage] = useState("");

    function onSubmit() {
        console.log("Criar embalagem:", pack)
    }

    function onCancel() {
        setPackage("")
        router.push("/packages")
        console.log("Cancelar embalagem")
    }

    return (
        <PackageForm
            mode="create"
            value={pack}
            onChange={setPackage}
            onSubmit={onSubmit}
            onCancel={onCancel}
        />
    );
}