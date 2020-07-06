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
    getByBusiness(businessId: Xuid<SupportedXuid.Business>) {
        return this.client
            .get<JsonResponse<Customer>>(`1/billing/customers/${businessId}`)
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
            .patch<JsonResponse<Customer>>(`1/billing/customers/${customer.id}`)
            .then((response: AxiosResponse<JsonResponse<Customer>>) => {
                return response.data.data;
            });
    }
}

export default Customers;
