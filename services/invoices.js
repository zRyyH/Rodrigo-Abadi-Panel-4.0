import { directusToAxiosParams } from "@/utils/serviceUtils";
import { transformData } from '@/utils/serviceUtils';
import { httpClient } from '@/lib/httpClient';

import { transformInvoice } from "@/transforms/invoices";

export const invoicesService = {
    getAll: async (search = '') => {
        const params = directusToAxiosParams({
            fields: ['*', 'origin_id.*'],
            search,
        })

        const { data } = await httpClient.get('/items/invoices', { params });
        return transformData(data?.data, transformInvoice);
    }
};