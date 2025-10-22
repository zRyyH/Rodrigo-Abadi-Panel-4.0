import { formatarCEST, formatarNCM, formatarReal } from "@/utils/formatters";
import { API_BASE_URL } from "@/config/axios";

export function transformProduct(product) {
    return {
        ...product,
        image: `${API_BASE_URL}/assets/${product.photo_ids[0].directus_files_id}`,
        package: product.package_id.type_of_packaging,
        supplier: product.supplier_id.supplier_name,
        cost: formatarReal(product.purchase_cost),
        ncm: formatarNCM(product.ncm),
        cest: formatarCEST(product.cest),
    };
}