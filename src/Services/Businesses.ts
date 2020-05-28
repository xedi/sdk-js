import { AxiosResponse } from 'axios';
import Service from './Service';
import JsonResponse from '../Interfaces/JsonResponse';
import { Collection, Business } from '../Models/Models';
import Xuid, { SupportedXuid } from '../Utils/Xuid';

/**
 * Businesses
 */
class Businesses extends Service
{
    /**
     * Lists businesses
     * @returns Promise<Business[]>
     */
    list()
    {
        return this.client
            .get<JsonResponse<Collection<Business>>>(`1/businesses`)
            .then((response: AxiosResponse<JsonResponse<Collection<Business>>>) => {
                return response.data.data;
            });
    }

    /**
     * Gets businesses
     * @param businessId
     * @returns Promise<Business>
     */
    get(businessId: Xuid<SupportedXuid.Business>) {
        return this.client
            .get<JsonResponse<Business>>(`1/businesses/${ businessId }`)
            .then((response: AxiosResponse<JsonResponse<Business>>) => {
                return response.data.data;
            });
    }

    /**
     * Creates businesses
     * @param business
     * @returns Promise<Business>
     */
    create(business: Business) {
        return this.client
            .post<JsonResponse<Business>>(`1/businesses`, business)
            .then((response: AxiosResponse<JsonResponse<Business>>) => {
                return response.data.data;
            });
    }

    /**
     * Gets by user
     * @param userId
     * @returns Promise<Business[]>
     */
    getByUser(userId: Xuid<SupportedXuid.User>) {
        return this.client
            .get<JsonResponse<Collection<Business>>>(`1/users/${ userId }/businesses`)
            .then((response: AxiosResponse<JsonResponse<Collection<Business>>>) => {
                return response.data.data;
            });
    }
}

export default Businesses;
