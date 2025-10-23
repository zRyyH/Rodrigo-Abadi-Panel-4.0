import { directusToAxiosParams } from "@/utils/serviceUtils";
import { transformData } from '@/utils/serviceUtils';
import { httpClient } from '@/lib/httpClient';

import { transformSupplier } from "@/transforms/suppliers";

export const suppliersService = {
    getAll: async (search = '') => {
        const params = directusToAxiosParams({
            fields: ['*'],
            search,
        })

        const { data } = await httpClient.get('/items/suppliers', { params });
        return transformData(data?.data, transformSupplier);
    }
};