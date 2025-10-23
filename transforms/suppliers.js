export function transformSupplier(supplier) {
    return {
        ...supplier,
        supplierName: supplier.supplier_name,
    }
}