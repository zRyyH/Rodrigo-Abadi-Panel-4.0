"use client";

import { invoicesService } from "@/services/invoices";
import FormManager from "@/components/forms/FormManager";
import InvoicesForm from "@/components/forms/InvoicesForm";

export default function OriginPage() {
    return (
        <FormManager
            queryKey="invoices"
            queryFn={invoicesService.getById}
            createFn={invoicesService.create}
            updateFn={invoicesService.update}
            redirectTo="/invoices"
            initialData={{ product_name: "", quantity: "", ncm: "", cest: "", origin_id: "" }}
        >
            <InvoicesForm />
        </FormManager>
    );
}