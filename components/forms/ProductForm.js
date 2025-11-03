"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { suppliersService } from "@/services/suppliers";
import { packagesService } from "@/services/packages";

import SelectSmart from "@/components/forms/inputs/Select";
import FormActions from "@/components/forms/inputs/Submit";
import LabeledInput from "@/components/forms/inputs/Input";

export default function ProductForm({
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

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                handleChange("image", reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        handleChange("image", null);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>{isEditMode ? "Editar Produto" : "Criar Produto"}</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-4">
                            <LabeledInput
                                id="name"
                                label="Nome"
                                placeholder="Digite o nome do fornecedor..."
                                value={formData.name || ""}
                                onChange={(value) => handleChange("name", value)}
                                required
                            />

                            <LabeledInput
                                id="sku"
                                label="SKU"
                                placeholder="Digite o nome do fornecedor..."
                                value={formData.sku || ""}
                                onChange={(value) => handleChange("sku", value)}
                                required
                            />

                            <LabeledInput
                                id="quantity"
                                label="Quantidade"
                                placeholder="Digite a quantidade..."
                                value={formData.quantity || ""}
                                onChange={(value) => handleChange("quantity", value)}
                                required
                            />

                            <LabeledInput
                                id="purchase_cost"
                                label="Custo"
                                placeholder="Digite o custo do produto..."
                                value={formData.purchase_cost || ""}
                                onChange={(value) => handleChange("purchase_cost", value)}
                                required
                            />

                            <SelectSmart
                                label="Embalagem"
                                placeholder="Selecionar embalagem..."
                                queryKey="packages"
                                service={packagesService.getAll}
                                value={formData.package_id}
                                onValueChange={(e) => handleChange("package_id", e)}
                                valueKey="id"
                                labelKey="type_of_packaging"
                                required
                                id="package-id-select"
                            />

                            <SelectSmart
                                label="Fornecedor"
                                placeholder="Selecionar fornecedor..."
                                queryKey="suppliers"
                                service={suppliersService.getAll}
                                value={formData.supplier_id}
                                onValueChange={(e) => handleChange("supplier_id", e)}
                                valueKey="id"
                                labelKey="supplier_name"
                                required
                                id="supplier-name-select"
                            />

                            <LabeledInput
                                id="cest"
                                label="CEST"
                                placeholder="Digite o CEST..."
                                value={formData.cest || ""}
                                onChange={(value) => handleChange("cest", value)}
                                required
                            />

                            <LabeledInput
                                id="ncm"
                                label="NCM"
                                placeholder="Digite o NCM..."
                                value={formData.ncm || ""}
                                onChange={(value) => handleChange("ncm", value)}
                                required
                            />
                        </div>

                        {/* Right Column - Image Upload
                        <div className="space-y-2">
                            <Label>Imagem do produto</Label>
                            <div className="relative">
                                {formData.image ? (
                                    <div className="relative h-64 overflow-hidden rounded-lg border-2 border-border">
                                        <img
                                            src={formData.image}
                                            alt="Preview"
                                            className="size-full object-cover"
                                        />
                                        <Button
                                            type="button"
                                            size="icon"
                                            variant="destructive"
                                            className="absolute top-2 right-2"
                                            onClick={handleRemoveImage}
                                            disabled={loading}
                                        >
                                            <XIcon className="size-4" />
                                        </Button>
                                    </div>
                                ) : (
                                    <label
                                        htmlFor="image-upload"
                                        className="flex h-64 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border transition-colors hover:border-primary"
                                    >
                                        <UploadIcon className="mb-4 size-12 text-muted-foreground" />
                                        <p className="text-sm text-muted-foreground">
                                            Clique para adicionar imagem
                                        </p>
                                        <input
                                            id="image-upload"
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleImageUpload}
                                            disabled={loading}
                                        />
                                    </label>
                                )}
                            </div>
                        </div> */}
                    </div>

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