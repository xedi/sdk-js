import Service from "../Service";
import Xuid, {SupportedXuid} from "../../Utils/Xuid";
import JsonResponse from "../../Interfaces/JsonResponse";
import {Customer} from "../../Models/Models";
import {AxiosResponse} from "axios";

class Customers extends Service {

    /**
     * Get customer
     * @param businessId
     * @returns Promise<Business>
     */
    get(businessId: Xuid<SupportedXuid.Business>) {
        return this.client
            .get<JsonResponse<Customer>>(`api/v1/customers/${businessId}`)
            .then((response: AxiosResponse<JsonResponse<Customer>>) => {
                return response.data.data;
            });
    }

    /**
     * Update Customer
     * @param customer
     * @returns Promise<Business>
     */
    update(customer: Customer) {
        return this.client
            .patch<JsonResponse<Customer>>(`api/v1/customers/${customer.id}`)
            .then((response: AxiosResponse<JsonResponse<Customer>>) => {
                return response.data.data;
            });
    }
}

export default Customers;
