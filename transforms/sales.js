import { formatarData } from "@/utils/formatters";

export function transformSale(sale) {
    return {
        ...sale,
        saleNumber: sale.sale_id,
        title: sale.listing_title,
        buyerName: sale.buyer_name,
        listingId: sale.listing_id,
        formattedDate: formatarData(sale.sale_date),
        deliveryMethod: sale.delivery_method,
    };
}