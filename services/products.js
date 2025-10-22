import { directusToAxiosParams } from "@/utils/serviceUtils";
import { transformData } from '@/utils/serviceUtils';
import { httpClient } from '@/lib/httpClient';

import { transformProduct } from "@/transforms/products";

export const productsService = {
    getAll: async (search = '') => {
        const params = directusToAxiosParams({
            fields: ['*', 'photo_ids.*', 'package_id.*', 'supplier_id.*'],
            search,
        })

        const { data } = await httpClient.get('/items/products', { params });
        return transformData(data?.data, transformProduct);
    }
};