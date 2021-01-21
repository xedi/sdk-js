import {AxiosResponse} from 'axios';
import Service from './Service';
import JsonResponse from '../Interfaces/JsonResponse';
import {Partner} from '../Models/Models';
import Xuid, {SupportedXuid} from '../Utils/Xuid';
import PaginatedJsonResponse from "../Interfaces/PaginatedJsonResponse";

/**
 * Partners
 */
class Partners extends Service {
    /**
     * Lists Partners
     * @returns Promise<PaginatedJsonResponse<Partner[]>>
     */
    list(params: object) {
        return this.client
            .get<PaginatedJsonResponse<Partner>>(`1/partners`, {params})
            .then((response: AxiosResponse<PaginatedJsonResponse<Partner>>) => {
                return response.data;
            });
    }

    /**
     * Get Partner
     * @param partnerId
     * @returns Promise<Partner>
     */
    get(partnerId: Xuid<SupportedXuid.Partner>) {
        return this.client
            .get<JsonResponse<Partner>>(`1/partners/${partnerId}`)
            .then((response: AxiosResponse<JsonResponse<Partner>>) => {
                return response.data.data;
            });
    }

    /**
     * Creates Partner
     * @param partner
     * @returns Promise<Partner>
     */
    create(partner: Partner) {
        return this.client
            .post<JsonResponse<Partner>>(`1/partners`, partner)
            .then((response: AxiosResponse<JsonResponse<Partner>>) => {
                return response.data.data;
            });
    }

    /**
     * Update a partner
     * @param partner
     * @returns Promise<Partner>
     */
    update(partner: Partner) {
        return this.client
            .patch<JsonResponse<Partner>>(`1/partners/${partner._id}`, partner)
            .then((response: AxiosResponse<JsonResponse<Partner>>) => {
                return response.data.data
            });
    }

}

export default Partners;
