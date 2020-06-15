import Service from './Service';
import Xuid, { SupportedXuid } from '../Utils/Xuid';
import JsonResponse from '../Interfaces/JsonResponse';
import { Partnership, Collection } from '../Models/Models';
import { AxiosResponse } from 'axios';

/**
 * Partnerships
 */
class Partnerships extends Service
{
    /**
     * Get by business
     * @param businessId
     * @returns <Promise>Partnership[]>
     */
    getByBusiness(businessId: Xuid<SupportedXuid.Business>)
    {
        return this.client
            .get<JsonResponse<Collection<Partnership>>>(`1/businesses/${ businessId }/partnerships`)
            .then((response: AxiosResponse<JsonResponse<Collection<Partnership>>>) => {
                return response.data.data;
            });
    }

    /**
     * Gets partnerships
     * @param partnershipId
     * @returns Promise<Partnership>
     */
    get(partnershipId: Xuid<SupportedXuid.Partnership>) {
        return this.client
            .get<JsonResponse<Partnership>>(`1/partnerships/${ partnershipId }`)
            .then((response: AxiosResponse<JsonResponse<Partnership>>) => {
                return response.data.data;
            });
    }

    /**
     * Creates partnerships
     * @param partnership
     * @returns Promise<Partnership>
     */
    create(partnership: Partnership) {
        return this.client
            .post<JsonResponse<Partnership>>(`1/partnerships`, partnership)
            .then((response: AxiosResponse<JsonResponse<Partnership>>) => {
                return response.data.data
            });
    }

    /**
     * Updates partnerships
     * @param partnership
     * @returns Promise<Partnership>
     */
    update(partnership: Partnership) {
        return this.client
            .patch<JsonResponse<Partnership>>(`1/partnerships/${ partnership._id }`, partnership)
            .then((response: AxiosResponse<JsonResponse<Partnership>>) => {
                return response.data.data
            });
    }

    /**
     * Deletes partnerships
     * @param partnershipId
     * @returns Promise<Partnership>
     */
    delete(partnershipId: Xuid<SupportedXuid.Partnership>) {
        return this.client
            .delete<JsonResponse<Partnership>>(`1/partnerships/${ partnershipId }`)
            .then((response: AxiosResponse<JsonResponse<Partnership>>) => {
                return response;
            });
    }
}

export default Partnerships;
