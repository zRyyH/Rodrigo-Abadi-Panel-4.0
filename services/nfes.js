import { directusToAxiosParams } from "@/utils/serviceUtils";
import { transformData } from '@/utils/serviceUtils';
import { httpClient } from '@/lib/httpClient';

import { transformNfe } from "@/transforms/nfes";

export const nfesService = {
    getAll: async (search = '') => {
        const params = directusToAxiosParams({
            fields: ['*'],
            search,
        })

        const { data } = await httpClient.get('/items/nfes', { params });
        return transformData(data?.data, transformNfe);
    }
};