import { formatarReal, formatarData } from "@/utils/formatters";
import { API_BASE_URL } from "@/config/axios";

export function transformNfe(nfe) {
    const pdf_url = nfe.pdf_id ? `${API_BASE_URL}/assets/${nfe.pdf_id}` : null
    const xml_url = nfe.xml_id ? `${API_BASE_URL}/assets/${nfe.xml_id}` : null

    return {
        ...nfe,
        saleNumber: nfe.sale_or_dispatch,
        invoiceNumber: nfe.invoice_number,
        totalValue: formatarReal(nfe.total_amount),
        date: formatarData(nfe.issue_date),
        pdf_url,
        xml_url
    };
}