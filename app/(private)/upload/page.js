"use client";

import { useState } from "react";
import { FileUploadForm } from "@/components/forms/FilesForm.js";
import { useNotification } from "@/hooks/useNotification";
import { useMutation } from '@tanstack/react-query';
import { filesService } from "@/services/files";
import { useRouter } from 'next/navigation';

export default function Upload() {
    const [files, setFiles] = useState({
        sales: null,
        nfes: null,
        xml: null,
        pdf: null
    });

    const router = useRouter();
    const { success, error } = useNotification();

    const mutation = useMutation({
        mutationFn: async (params) => {
            return await filesService.upload(params);
        },
        onSuccess: () => {
            success("Upload", "Arquivos enviados com sucesso");
            router.push("/products");
        },
        onError: (e) => {
            error("Upload", "Ops ocorreu um erro")
        },
    })

    const handleFileChange = (key, file) => {
        setFiles(prev => ({ ...prev, [key]: file }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutateAsync(files)
    };

    return (
        <FileUploadForm
            files={files}
            onFileChange={handleFileChange}
            onSubmit={handleSubmit}
            loading={mutation.isPending}
        />
    );
}