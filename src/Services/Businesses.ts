import {AxiosResponse} from 'axios';
import Service from './Service';
import JsonResponse from '../Interfaces/JsonResponse';
import PaginatedJsonResponse from '../Interfaces/PaginatedJsonResponse';
import {Business, User} from '../Models/Models';
import Xuid, {SupportedXuid} from '../Utils/Xuid';

/**
 * Businesses
 */
class Businesses extends Service {

    /**
     * Lists businesses
     *
     * @param params object
     *
     * @returns Promise<PaginatedJsonResponse<Business[]>>
     */
    list(params: object): Promise<PaginatedJsonResponse<Business>> {
        return this.client
            .get<PaginatedJsonResponse<Business>>(`1/businesses`, {params})
            .then((response: AxiosResponse<PaginatedJsonResponse<Business>>) => {
                return response.data;
            });
    }

    /**
     * Gets businesses
     * @param businessId
     * @returns Promise<Business>
     */
    get(businessId: Xuid<SupportedXuid.Business>) {
        return this.client
            .get<JsonResponse<Business>>(`1/businesses/${businessId}`)
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
     * Update a business
     * @param business
     * @returns Promise<business>
     */
    update(business: Business) {
        return this.client
            .patch<JsonResponse<Business>>(`1/businesses/${business._id}`, business)
            .then((response: AxiosResponse<JsonResponse<Business>>) => {
                return response.data.data
            });
    }

    /**
     * Gets by user
     *
     * @param userId
     * @param params
     *
     * @returns Promise<PaginatedJsonResponse<Business[]>>
     */
    getByUser(userId: Xuid<SupportedXuid.User>, params: object): Promise<PaginatedJsonResponse<Business>> {
        return this.client
            .get<PaginatedJsonResponse<Business>>(`1/users/${userId}/businesses`, {params})
            .then((response: AxiosResponse<PaginatedJsonResponse<Business>>) => {
                return response.data;
            });
    }

    /**
     * Get users for business
     *
     * @param businessId
     * @param config
     *
     * @returns Promise<PaginatedJsonResponse<User[]>>
     */
    users(businessId: Xuid<SupportedXuid.Business>, config: object): Promise<PaginatedJsonResponse<User>> {
        return this.client
            .get<PaginatedJsonResponse<User>>(`1/businesses/${businessId}/users`, config)
            .then((response: AxiosResponse<PaginatedJsonResponse<User>>) => {
                return response.data;
            });
    }

    /**
     * Remove User from Business
     *
     * @param businessId
     * @param userId
     *
     * @returns Promise<Business>
     */
    removeUserFromBusiness(businessId: Xuid<SupportedXuid.Business>, userId: Xuid<SupportedXuid.User>) {
        return this.client.delete<null>(`1/businesses/${businessId}/users/${userId}`);
    }

    /**
     * Search Businesses
     * @returns Promise<PaginatedJsonResponse<Business[]>>
     */
    search(params: object) {
        return this.client
            .post<PaginatedJsonResponse<Business>>(`1/search/businesses`, params)
            .then((response: AxiosResponse<PaginatedJsonResponse<Business>>) => {
                return response.data;
            });
    }
}

export default Businesses;
