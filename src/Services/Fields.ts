import Service from './Service';
import Xuid, {SupportedXuid} from '../Utils/Xuid';
import JsonResponse from '../Interfaces/JsonResponse';
import {Field} from '../Models/Models';
import {AxiosResponse} from 'axios';
import PaginatedJsonResponse from "../Interfaces/PaginatedJsonResponse";

/**
 * Fields
 */
class Fields extends Service {
    /**
     * Get by business
     * @param params
     * @returns Promise<PaginatedJsonResponse<Field[]>>
     */
    list(params: object) {
        return this.client
            .get<PaginatedJsonResponse<Field>>(`1/fields`, {params})
            .then((response: AxiosResponse<PaginatedJsonResponse<Field>>) => {
                return response.data;
            });
    }

    /**
     * Gets field
     * @param fieldId
     * @returns Promise<Field>
     */
    get(fieldId: Xuid<SupportedXuid.Field>) {
        return this.client
            .get<JsonResponse<Field>>(`1/fields/${fieldId}`)
            .then((response: AxiosResponse<JsonResponse<Field>>) => {
                return response.data.data;
            });
    }

    /**
     * Creates field
     * @param product
     * @returns Promise<Field>
     */
    create(product: Field) {
        return this.client
            .post<JsonResponse<Field>>(`1/fields`, product)
            .then((response: AxiosResponse<JsonResponse<Field>>) => {
                return response.data.data
            });
    }

    /**
     * Updates field
     * @param product
     * @returns Promise<Field>
     */
    update(product: Field) {
        return this.client
            .patch<JsonResponse<Field>>(`1/fields/${product._id}`, product)
            .then((response: AxiosResponse<JsonResponse<Field>>) => {
                return response.data.data
            });
    }

    /**
     * Deletes field
     * @param fieldId
     * @returns Promise<Field>
     */
    delete(fieldId: Xuid<SupportedXuid.Field>) {
        return this.client
            .delete<JsonResponse<Field>>(`1/fields/${fieldId}`)
            .then((response: AxiosResponse<JsonResponse<Field>>) => {
                return response;
            });
    }

    /**
     * Search Fields
     * @returns Promise<PaginatedJsonResponse<Field[]>>
     */
    search(params: object) {
        return this.client
            .post<PaginatedJsonResponse<Field>>(`1/search/fields`, params)
            .then((response: AxiosResponse<PaginatedJsonResponse<Field>>) => {
                return response.data;
            });
    }
}

export default Fields;
