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
     * @param productId
     * @returns Promise<Partnership>
     */
    get(productId: Xuid<SupportedXuid.Partnership>) {
        return this.client
            .get<JsonResponse<Partnership>>(`1/partnerships/${ productId }`)
            .then((response: AxiosResponse<JsonResponse<Partnership>>) => {
                return response.data.data;
            });
    }

    /**
     * Creates partnerships
     * @param product
     * @returns Promise<Partnership>
     */
    create(product: Partnership) {
        return this.client
            .post<JsonResponse<Partnership>>(`1/partnerships`, product)
            .then((response: AxiosResponse<JsonResponse<Partnership>>) => {
                return response.data.data
            });
    }

    /**
     * Updates partnerships
     * @param product
     * @returns Promise<Partnership>
     */
    update(product: Partnership) {
        return this.client
            .patch<JsonResponse<Partnership>>(`1/partnerships/${ product._id }`, product)
            .then((response: AxiosResponse<JsonResponse<Partnership>>) => {
                return response.data.data
            });
    }

    /**
     * Deletes partnerships
     * @param productId
     * @returns Promise<Partnership>
     */
    delete(productId: Xuid<SupportedXuid.Partnership>) {
        return this.client
            .delete<JsonResponse<Partnership>>(`1/partnerships/${ productId }`)
            .then((response: AxiosResponse<JsonResponse<Partnership>>) => {
                return response;
            });
    }
}

export default Partnerships;
