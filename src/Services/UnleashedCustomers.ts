import {AxiosResponse} from 'axios';
import Service from './Service';
import JsonResponse from '../Interfaces/JsonResponse';
import PaginatedJsonResponse from '../Interfaces/PaginatedJsonResponse';
import {UnleashedCustomer} from '../Models/Models';
import Xuid, {SupportedXuid} from '../Utils/Xuid';

/**
 * Locations
 */
class UnleashedCustomers extends Service {

    /**
     * List Unleashed customer mappings
     *
     * @param params
     *
     * @returns Promise<JsonResponse<UnleashedCustomer[]>>
     */
    index(params: object) {
        return this.client
            .get<PaginatedJsonResponse<UnleashedCustomer[]>>(`1/unleashed`, params)
            .then((response: AxiosResponse<PaginatedJsonResponse<UnleashedCustomer[]>>) => {
                return response.data;
            });
    }

    /**
     * Get a unleashed customer mapping by ID
     *
     * @param mappingId
     *
     * @returns Promise<JsonResponse<Location>>
     */
    get(mappingId: Xuid<SupportedXuid.UnleashedCustomerMapping>) {
        return this.client
            .get<JsonResponse<UnleashedCustomer>>(`1/unleashed/${mappingId}`)
            .then((response: AxiosResponse<JsonResponse<UnleashedCustomer>>) => {
                return response.data;
            });
    }

    /**
     * Create an unleashed customer mapping
     *
     * @param mapping
     *
     * @returns Promise<JsonResponse<UnleashedCustomer>>
     */
    create(mapping: UnleashedCustomer) {
        return this.client
            .post<JsonResponse<UnleashedCustomer>>('1/unleashed', mapping)
            .then((response: AxiosResponse<JsonResponse<UnleashedCustomer>>) => {
                return response.data;
            });
    }

    /**
     * Update a mapping
     *
     * @param mapping
     *
     * @returns Promise<JsonResponse<UnleashedCustomer>>
     */
    update(mapping: UnleashedCustomer) {
        return this.client
            .patch<JsonResponse<UnleashedCustomer>>('1/unleashed/' + mapping._id, mapping)
            .then((response: AxiosResponse<JsonResponse<UnleashedCustomer>>) => {
                return response.data;
            });
    }

    /**
     * Delete a mapping by ID
     *
     * @param mappingId
     *
     * @returns Promise<JsonResponse<UnleashedCustomer>>
     */
    delete(mappingId: Xuid<SupportedXuid.UnleashedCustomerMapping>) {
        return this.client
            .delete<JsonResponse<UnleashedCustomer>>(`1/locations/${mappingId}`)
            .then((response: AxiosResponse<JsonResponse<UnleashedCustomer>>) => {
                return response.data;
            });
    }

}

export default UnleashedCustomers;