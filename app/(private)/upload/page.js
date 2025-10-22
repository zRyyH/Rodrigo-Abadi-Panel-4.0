"use client";

import { useState } from "react";
import { FileUploadForm } from "@/components/forms/FilesForm.js";

export default function Example() {
    const [files, setFiles] = useState({
        sales: null,
        nfes: null,
        xml: null,
        pdf: null
    });

    const handleFileChange = (key, file) => {
        setFiles(prev => ({ ...prev, [key]: file }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Files:", files);
    };

    return (
        <FileUploadForm
            files={files}
            onFileChange={handleFileChange}
            onSubmit={handleSubmit}
        />
    );
}