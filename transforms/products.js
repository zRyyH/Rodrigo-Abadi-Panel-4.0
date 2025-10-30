import { formatarCEST, formatarNCM, formatarReal } from "@/utils/formatters";
import { DIRECTUS_BASE_URL } from "@/config/directus";

export function transformProduct(product) {
    console.log(product)

    return {
        ...product,
        image: `${DIRECTUS_BASE_URL}/assets/${product?.photo_ids?.[0]?.directus_files_id?.id}`,
        type_of_packaging: product?.package_id?.type_of_packaging,
        purchase_cost: formatarReal(product?.purchase_cost),
        supplier_name: product?.supplier_id?.supplier_name,
        cest: formatarCEST(product?.cest),
        ncm: formatarNCM(product?.ncm),
    };
}