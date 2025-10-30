"use client";

import SupplierForm from "@/components/forms/SupplierForm";
import FormManager from "@/components/forms/FormManager";
import { suppliersService } from "@/services/suppliers";

export default function PackagesPage() {
    return (
        <FormManager
            queryKey="suppliers"
            queryFn={suppliersService.getById}
            createFn={suppliersService.create}
            updateFn={suppliersService.update}
            redirectTo="/suppliers"
            initialData={{ supplier_name: "" }}
        >
            <SupplierForm />
        </FormManager>
    );
}