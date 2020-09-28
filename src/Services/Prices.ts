import Service from './Service';
import Xuid, {SupportedXuid} from '../Utils/Xuid';
import JsonResponse from '../Interfaces/JsonResponse';
import {Price} from '../Models/Models';
import {AxiosResponse} from 'axios';

/**
 * Prices
 */
class Prices extends Service {

    /**
     * Gets prices
     * @param priceId
     * @returns Promise<Price>
     */
    get(priceId: Xuid<SupportedXuid.Price>) {
        return this.client
            .get<JsonResponse<Price>>(`1/prices/${priceId}`)
            .then((response: AxiosResponse<JsonResponse<Price>>) => {
                return response.data.data;
            });
    }

    /**
     * Creates price
     * @param price
     * @returns Promise<Price>
     */
    create(price: Price) {
        return this.client
            .post<JsonResponse<Price>>(`1/prices`, price)
            .then((response: AxiosResponse<JsonResponse<Price>>) => {
                return response.data.data
            });
    }

    /**
     * Updates price
     * @param price
     * @returns Promise<Price>
     */
    update(price: Price) {
        return this.client
            .patch<JsonResponse<Price>>(`1/prices/${price._id}`, price)
            .then((response: AxiosResponse<JsonResponse<Price>>) => {
                return response.data.data
            });
    }

    /**
     * Deletes price
     * @param priceId
     * @returns Promise<Price>
     */
    delete(priceId: Xuid<SupportedXuid.Price>) {
        return this.client
            .delete<JsonResponse<Price>>(`1/prices/${priceId}`)
            .then((response: AxiosResponse<JsonResponse<Price>>) => {
                return response.data.data;
            });
    }
}

export default Prices;
