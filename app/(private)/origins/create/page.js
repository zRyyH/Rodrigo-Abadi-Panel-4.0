"use client";

import FormManager from "@/components/forms/FormManager";
import OriginForm from "@/components/forms/OriginForm";
import { originsService } from "@/services/origins";

export default function OriginPage() {
    return (
        <div className="animate-fadeSlideIn" >
            <FormManager
                queryKey="origins"
                queryFn={originsService.getById}
                createFn={originsService.create}
                updateFn={originsService.update}
                redirectTo="/origins"
                initialData={{ origin: "" }}
            >
                <OriginForm />
            </FormManager>
        </div>
    );
}