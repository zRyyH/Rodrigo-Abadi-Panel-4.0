/**
 * Limpa dados do formulário para enviar ao Directus
 * Remove objetos aninhados e mantém apenas IDs
 */
export function cleanFormData(formData) {
    const cleaned = { ...formData };

    // Limpa photo_ids - envia apenas a estrutura necessária
    if (cleaned.photo_ids && Array.isArray(cleaned.photo_ids)) {
        cleaned.photo_ids = cleaned.photo_ids.map(photo => {
            // Se já está no formato correto (do upload)
            if (photo.products_id === "+" && photo.directus_files_id?.id) {
                return photo;
            }

            // Se veio do banco (modo edit) - extrai apenas o ID do arquivo
            if (photo.directus_files_id) {
                const fileId = typeof photo.directus_files_id === 'string'
                    ? photo.directus_files_id
                    : photo.directus_files_id.id;

                return {
                    products_id: "+",
                    directus_files_id: { id: fileId }
                };
            }

            // Se é apenas uma string (ID)
            if (typeof photo === 'string') {
                return {
                    products_id: "+",
                    directus_files_id: { id: photo }
                };
            }

            return photo;
        });
    }

    // Remove campos que não devem ser enviados
    delete cleaned.images;
    delete cleaned.type_of_packaging;
    delete cleaned.supplier_name;

    // Garante que IDs sejam apenas números/strings
    if (cleaned.supplier_id && typeof cleaned.supplier_id === 'object') {
        cleaned.supplier_id = cleaned.supplier_id.id;
    }

    if (cleaned.package_id && typeof cleaned.package_id === 'object') {
        cleaned.package_id = cleaned.package_id.id;
    }

    return cleaned;
}