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
     * @param business_id
     * @returns Promise<Business>
     */
    get(business_id: Xuid<SupportedXuid.Business>) {
        return this.client
            .get<JsonResponse<Business>>(`1/businesses/${ business_id }`)
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
     * @param user_id
     * @returns Promise<Business[]>
     */
    getByUser(user_id: Xuid<SupportedXuid.User>) {
        return this.client
            .get<JsonResponse<Collection<Business>>>(`1/users/${ user_id }/businesses`)
            .then((response: AxiosResponse<JsonResponse<Collection<Business>>>) => {
                return response.data.data;
            });
    }
}

export default Businesses;
