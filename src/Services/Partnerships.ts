import Service from './Service';
import Xuid, {SupportedXuid} from '../Utils/Xuid';
import JsonResponse from '../Interfaces/JsonResponse';
import {Partnership} from '../Models/Models';
import PartnershipField from '../Models/PartnershipField';
import {AxiosResponse} from 'axios';
import PaginatedJsonResponse from "../Interfaces/PaginatedJsonResponse";

/**
 * Partnerships
 */
class Partnerships extends Service {

    /**
     * Get by business
     * @param config object
     * @returns <Promise>Partnership[]>
     */
    list(config: object) {
        return this.client
            .get(`1/partnerships`, config)
            .then((response: AxiosResponse<PaginatedJsonResponse<Partnership>>) => {
                return response.data;
            });
    }

    /**
     * Gets partnerships
     * @param partnershipId
     * @param headers
     * @returns Promise<Partnership>
     */
    get(partnershipId: Xuid<SupportedXuid.Partnership>, headers: object) {
        return this.client
            .get(`1/partnerships/${partnershipId}`, {headers})
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
            .patch<JsonResponse<Partnership>>(`1/partnerships/${partnership._id}`, partnership)
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
            .delete<JsonResponse<Partnership>>(`1/partnerships/${partnershipId}`)
            .then((response: AxiosResponse<JsonResponse<Partnership>>) => {
                return response;
            });
    }

    fields(partnershipId: Xuid<SupportedXuid.Partnership>) {
        return this.client
            .get<JsonResponse<PartnershipField[]>>(`1/partnerships/${partnershipId}/fields`)
            .then((response: AxiosResponse<JsonResponse<PartnershipField[]>>) => {
                return response;
        });
    }

    updateFieldValues(partnershipId: Xuid<SupportedXuid.Partnership>, params: object) {
        return this.client
            .patch<JsonResponse<PartnershipField[]>>(`1/partnerships/${partnershipId}/fields`, params)
            .then((response: AxiosResponse<JsonResponse<PartnershipField[]>>) => {
                return response;
        });
    }

}

export default Partnerships;
