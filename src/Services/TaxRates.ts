import Service from './Service';
import Xuid, {SupportedXuid} from '../Utils/Xuid';
import JsonResponse from '../Interfaces/JsonResponse';
import {TaxRate} from '../Models/Models';
import {AxiosResponse} from 'axios';
import PaginatedJsonResponse from "../Interfaces/PaginatedJsonResponse";

/**
 * TaxRates
 */
class TaxRates extends Service {
    /**
     * Get by business
     * @param params
     * @returns Promise<PaginatedJsonResponse<TaxRate[]>>
     */
    list(params: object) {
        return this.client
            .get<PaginatedJsonResponse<TaxRate>>(`1/tax`, {params})
            .then((response: AxiosResponse<PaginatedJsonResponse<TaxRate>>) => {
                return response.data;
            });
    }

    /**
     * Gets tax rate
     * @param taxRateId
     * @returns Promise<TaxRate>
     */
    get(taxRateId: Xuid<SupportedXuid.TaxRate>) {
        return this.client
            .get<JsonResponse<TaxRate>>(`1/tax/${taxRateId}`)
            .then((response: AxiosResponse<JsonResponse<TaxRate>>) => {
                return response.data.data;
            });
    }

    /**
     * Creates tax rate
     * @param product
     * @returns Promise<TaxRate>
     */
    create(product: TaxRate) {
        return this.client
            .post<JsonResponse<TaxRate>>(`1/tax`, product)
            .then((response: AxiosResponse<JsonResponse<TaxRate>>) => {
                return response.data.data
            });
    }

    /**
     * Updates tax rate
     * @param product
     * @returns Promise<TaxRate>
     */
    update(product: TaxRate) {
        return this.client
            .patch<JsonResponse<TaxRate>>(`1/tax/${product._id}`, product)
            .then((response: AxiosResponse<JsonResponse<TaxRate>>) => {
                return response.data.data
            });
    }

    /**
     * Deletes tax rate
     * @param taxRateId
     * @returns Promise<TaxRate>
     */
    delete(taxRateId: Xuid<SupportedXuid.TaxRate>) {
        return this.client
            .delete<JsonResponse<TaxRate>>(`1/tax/${taxRateId}`)
            .then((response: AxiosResponse<JsonResponse<TaxRate>>) => {
                return response;
            });
    }
}

export default TaxRates;
