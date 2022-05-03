import {AxiosResponse} from 'axios';
import Service from './Service';
import JsonResponse from '../Interfaces/JsonResponse';
import {Collection, BusinessType} from '../Models/Models';
import Xuid, {SupportedXuid} from '../Utils/Xuid';

/**
 * Document types
 */
class BusinessTypes extends Service {
    /**
     * Lists Document types
     * @returns Promise<BusinessType[]>
     */
    list(params: object) {
        return this.client
            .get<JsonResponse<Collection<BusinessType>>>(`1/businesstypes`, params)
            .then((response: AxiosResponse<JsonResponse<Collection<BusinessType>>>) => {
                return response.data;
            });
    }

    /**
     * Gets Document type
     * @param businessTypeId
     * @returns Promise<BusinessType>
     */
    get(businessTypeId: Xuid<SupportedXuid.BusinessType>) {
        return this.client
            .get<JsonResponse<BusinessType>>(`1/businesstypes/${businessTypeId}`)
            .then((response: AxiosResponse<JsonResponse<BusinessType>>) => {
                return response.data.data;
            });
    }

     /**
     * Creates document group
     * @param businessType
     * @returns Promise<BusinessType>
     */
    create(BusinessType: BusinessType) {
        return this.client
            .post<JsonResponse<BusinessType>>(`1/businesstypes`, BusinessType)
            .then((response: AxiosResponse<JsonResponse<BusinessType>>) => {
                return response.data.data
            });
    }
    
        /**
         * Updates document group
         * @param businessType
         * @returns Promise<BusinessType>
         */
        update(BusinessType: BusinessType) {
            return this.client
                .patch<JsonResponse<BusinessType>>(`1/businesstypes/${BusinessType._id}`, BusinessType)
                .then((response: AxiosResponse<JsonResponse<BusinessType>>) => {
                    return response.data.data
                });
        }
}

export default BusinessTypes;
