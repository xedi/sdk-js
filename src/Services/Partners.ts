import {AxiosResponse} from 'axios';
import Service from './Service';
import JsonResponse from '../Interfaces/JsonResponse';
import {Partner} from '../Models/Models';
import PartnerField from '../Models/PartnerField';
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

    /**
     * Search Partners
     * @returns Promise<PaginatedJsonResponse<Partner[]>>
     */
    search(params: object) {
        return this.client
            .post<PaginatedJsonResponse<Partner>>(`1/search/partners`, params)
            .then((response: AxiosResponse<PaginatedJsonResponse<Partner>>) => {
                return response.data;
            });
    }

    /**
     * Map Field for partner
     * @param partnerId
     * @param params
     * @returns Promise<JsonResponse<Partner>>
     */
    mapfield(partnerId: Xuid<SupportedXuid.Partner>, fieldId: string, params: object) {
        return this.client
        .post<JsonResponse<Partner>>(`1/partners/${partnerId}/field/${fieldId}`, params)
        .then((response: AxiosResponse<JsonResponse<Partner>>) => {
            return response.data;
        });
    }


    /**
     * Removed Maped Field for partner
     * @param partnerId
     * @param params
     * @returns Promise<JsonResponse<Partner>>
     */
     unmapfield(partnerId: Xuid<SupportedXuid.Partner>, fieldId: string) {
        return this.client
        .delete<JsonResponse<PartnerField>>(`1/partners/${partnerId}/field/${fieldId}`)
        .then((response: AxiosResponse<JsonResponse<PartnerField>>) => {
            return response;
        });
    }

    /**
     * PartnerFields mapped fields for this partner
     * @param partnerId
     * @returns
     */
    partnerfields(partnerId:  Xuid<SupportedXuid.Partner>)
    {
        return this.client
        .get<JsonResponse<PartnerField>>(`1/partners/${partnerId}/fields`)
        .then((response: AxiosResponse<JsonResponse<PartnerField>>) => {
            return response;
        });
    }

}

export default Partners;
