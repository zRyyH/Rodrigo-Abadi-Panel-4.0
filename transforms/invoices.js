export function transformInvoice(invoice) {
    return {
        ...invoice,
        origin: invoice.origin_id.origin,
        productName: invoice.product_name,
    };
}