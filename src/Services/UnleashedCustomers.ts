import {AxiosResponse} from 'axios';
import Service from './Service';
import JsonResponse from '../Interfaces/JsonResponse';
import {Collection, UnleashedCustomer} from '../Models/Models';
import Xuid, {SupportedXuid} from '../Utils/Xuid';

/**
 * Unleashed types
 */
class UnleashedCustomers extends Service {
    /**
     * Lists Unleashed Customers
     * @returns Promise<UnleashedCustomer[]>
     */
    list(params: object) {
        return this.client
            .get<JsonResponse<Collection<UnleashedCustomer>>>(`1/unleashed`, params)
            .then((response: AxiosResponse<JsonResponse<Collection<UnleashedCustomer>>>) => {
                return response.data;
            });
    }

    /**
     * Toggle Unleashed Order Forwarder
     * @returns Promise<>
     */
    toggle(params: object) {
        return this.client
            .post<JsonResponse<any>>(`1/unleashed/togglepartnership`, params)
            .then((response: AxiosResponse<JsonResponse<any>>) => {
                return response.data;
            });
    }

/*    getConfig(partnershipId: string) {
        return this.client
            .get<JsonResponse<any>>(`1/unleashed/getconfig/${partnershipId}`)
            .then((response: AxiosResponse<JsonResponse<any>>) => {
                return response.data;
            });
    }*/

    /**
     * Sync Unleashed Customers
     * @returns Promise<UnleashedCustomer[]>
     */
    sync(params: object) {
        return this.client
            .post<JsonResponse<Collection<UnleashedCustomer>>>(`1/unleashed/sync`, params)
            .then((response: AxiosResponse<JsonResponse<Collection<UnleashedCustomer>>>) => {
                return response.data;
            });
    }
}

export default UnleashedCustomers;
