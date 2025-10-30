"use client";

import FormManager from "@/components/forms/FormManager";
import PackageForm from "@/components/forms/PackageForm";
import { packagesService } from "@/services/packages";

export default function PackagesPage() {
    return (
        <div className="animate-fadeSlideIn" >
            <FormManager
                queryKey="packages"
                queryFn={packagesService.getById}
                createFn={packagesService.create}
                updateFn={packagesService.update}
                redirectTo="/packages"
                initialData={{ type_of_packaging: "" }}
            >
                <PackageForm />
            </FormManager>
        </div>
    );
}