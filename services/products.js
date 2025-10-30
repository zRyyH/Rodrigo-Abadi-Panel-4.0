import { directusToAxiosParams } from "@/utils/serviceUtils";
import { transformData } from '@/utils/serviceUtils';
import { directus } from '@/lib/directus';

import { transformProduct } from "@/transforms/products";

export const productsService = {
    getAll: async (search = '') => {
        const params = directusToAxiosParams({
            fields: ['*.*.*.*'],
            search,
        })

        const { data } = await directus.get('/items/products', { params });
        return transformData(data?.data, transformProduct);
    },
    getById: async (id) => {
        const { data } = await directus.get(`/items/products/${id}`);
        return data?.data
    },
    create: async (data) => {
        return await directus.post('/items/products', data);
    },
    update: async (id) => {
        return await directus.patch(`/items/products/${id}`, data);
    },
    delete: async (id) => {
        return await directus.delete(`/items/products/${id}`);
    },
};