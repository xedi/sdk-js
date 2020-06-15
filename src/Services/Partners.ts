import { AxiosResponse } from 'axios';
import Service from './Service';
import JsonResponse from '../Interfaces/JsonResponse';
import { Collection, Partner } from '../Models/Models';
import Xuid, { SupportedXuid } from '../Utils/Xuid';

/**
 * Partners
 */
class Partners extends Service
{
    /**
     * Lists Partners
     * @returns Promise<Business[]>
     */
    list()
    {
        return this.client
            .get<JsonResponse<Collection<Partner>>>(`1/partners`)
            .then((response: AxiosResponse<JsonResponse<Collection<Partner>>>) => {
                return response.data.data;
            });
    }

    /**
     * Get Partner
     * @param partnerId
     * @returns Promise<Partner>
     */
    get(partnerId: Xuid<SupportedXuid.Partner>) {
        return this.client
            .get<JsonResponse<Partner>>(`1/partners/${ partnerId }`)
            .then((response: AxiosResponse<JsonResponse<Partner>>) => {
                return response.data.data;
            });
    }

    /**
     * Creates Partner
     * @param business
     * @returns Promise<Partner>
     */
    create(business: Partner) {
        return this.client
            .post<JsonResponse<Partner>>(`1/partners`, business)
            .then((response: AxiosResponse<JsonResponse<Partner>>) => {
                return response.data.data;
            });
    }

}

export default Partners;
