"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import OriginForm from "@/components/forms/OriginForm";

export default function CreateOrigin() {
    const router = useRouter()
    const [origin, setOrigin] = useState("");

    function onSubmit() {
        console.log("Criar:", origin)
    }

    function onCancel() {
        setOrigin("")
        router.push("/origins")
        console.log("Cancelar origem")
    }

    return (
        <OriginForm
            mode="create"
            value={origin}
            onChange={setOrigin}
            onSubmit={onSubmit}
            onCancel={onCancel}
        />
    );
}