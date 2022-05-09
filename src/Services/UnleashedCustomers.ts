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
}

export default UnleashedCustomers;
