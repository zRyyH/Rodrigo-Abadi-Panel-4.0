"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import FormActions from "@/components/forms/inputs/Submit";
import LabeledInput from "@/components/forms/inputs/Input";

export default function SupplierForm({
    formData = {},
    setFormData,
    onSubmit,
    onCancel,
    loading = false,
    mode = "create"
}) {
    const isEditMode = mode === "edit";

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Criar Fornecedor</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={onSubmit} className="space-y-6">
                    <LabeledInput
                        id="supplier_name"
                        label="Fornecedor"
                        placeholder="Digite o nome do fornecedor..."
                        value={formData.supplier_name || ""}
                        onChange={(value) => handleChange("supplier_name", value)}
                        required
                    />

                    <FormActions
                        loading={loading}
                        isEditMode={isEditMode}
                        onCancel={onCancel}
                    />
                </form>
            </CardContent>
        </Card>
    );
}