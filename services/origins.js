import { directusToAxiosParams } from "@/utils/serviceUtils";
import { transformData } from '@/utils/serviceUtils';
import { httpClient } from '@/lib/httpClient';

import { transformOrigin } from "@/transforms/origins";

export const originsService = {
    getAll: async (search = '') => {
        const params = directusToAxiosParams({
            fields: ['*'],
            search,
        })

        const { data } = await httpClient.get('/items/origins', { params });
        return transformData(data?.data, transformOrigin);
    }
};