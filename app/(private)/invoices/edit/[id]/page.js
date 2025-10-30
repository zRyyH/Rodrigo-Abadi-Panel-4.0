"use client";

import { useState } from "react";
import InvoicesForm from "@/components/forms/InvoicesForm";
import { useCrud } from "@/hooks/useCrud";
import { invoicesService } from "@/services/invoices";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function EditInvoices() {
    const [form, setForm] = useState({ name: '', email: '' });
    const params = useParams();

    const { update, isUpdating, isLoadingItem, loadForEdit } = useCrud(invoicesService, {
        queryKey: 'invoices',
        title: 'Nota',
        autoLoadId: params.id,
        onLoadForEdit: (item) => {
            console.log(item)
        },
        redirects: {
            update: '/invoices'
        }
    });

    return (
        <InvoicesForm
            formData={form}
            setFormData={setForm}
            onSubmit={() => update(form)}
        />
    );
}