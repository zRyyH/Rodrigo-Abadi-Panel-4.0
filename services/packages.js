import { directusToAxiosParams } from "@/utils/serviceUtils";
import { transformData } from '@/utils/serviceUtils';
import { httpClient } from '@/lib/httpClient';

import { transformPackage } from "@/transforms/packages";

export const packagesService = {
    getAll: async (search = '') => {
        const params = directusToAxiosParams({
            fields: ['*'],
            search,
        })

        const { data } = await httpClient.get('/items/packages', { params });
        return transformData(data?.data, transformPackage);
    }
};