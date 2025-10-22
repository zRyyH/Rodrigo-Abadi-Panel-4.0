import { directusToAxiosParams } from "@/utils/serviceUtils";
import { transformData } from '@/utils/serviceUtils';
import { httpClient } from '@/lib/httpClient';

import { transformSale } from "@/transforms/sales";

export const salesService = {
    getAll: async (search = '') => {
        const params = directusToAxiosParams({
            fields: ['*'],
            search,
        })

        const { data } = await httpClient.get('/items/sales', { params });
        return transformData(data?.data, transformSale);
    }
};