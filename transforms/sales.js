import { DIRECTUS_BASE_URL } from "@/config/directus";
import { formatarData, formatarReal } from "@/utils/formatters"

export function transformSale(sale) {
    return {
        ...sale,
        sale_date: formatarData(sale.sale_date),
    };
};

export function transformSaleView(sale) {
    console.log(sale)

    return {
        ...sale,
        product: {
            imageUrl: `${DIRECTUS_BASE_URL}/assets/${sale?.product_id?.photo_ids?.[0]?.directus_files_id}`,
            name: sale?.product_id?.name,
            value: formatarReal(sale?.product_id?.purchase_cost),
            quantity: sale?.units
        },
        invoice_number: sale?.nfe_id?.invoice_number,
        xml_url: `${DIRECTUS_BASE_URL}/assets/${sale?.nfe_id?.xml_id?.id}`,
        pdf_url: `${DIRECTUS_BASE_URL}/assets/${sale?.nfe_id?.pdf_id?.id}`,
        date: formatarData(sale?.sale_date),
        nfe_key: sale?.nfe_id?.nfe_key,
        product_revenue: formatarReal(sale?.product_revenue),
        shipping_revenue: formatarReal(sale?.shipping_revenue),
        shipping_fees: formatarReal(sale?.shipping_fees),
        sales_fee_and_taxes: formatarReal(sale?.sales_fee_and_taxes),
        total_amount: formatarReal(sale?.total_amount),
        profit: formatarReal(sale?.total_amount - sale?.product_id?.purchase_cost),
    };
}