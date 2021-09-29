import Service from "../Service";
import JsonResponse from "../../Interfaces/JsonResponse";
import {Collection, Invoice} from "../../Models/Models";
import {AxiosResponse} from "axios";

class Invoices extends Service {

    /**
     * Get invoices
     * @returns Promise<Invoice>
     */
    list() {
        return this.client
            .get<JsonResponse<Collection<Invoice>>>('1/billing/invoices')
            .then((response: AxiosResponse<JsonResponse<Collection<Invoice>>>) => {
                return response.data.data;
            });
    }

    /**
     * Get upcoming invoice
     * @returns Promise<Invoice>
     */
    upcoming() {
        return this.client
            .get<JsonResponse<Invoice>>('1/billing/invoices/upcoming')
            .then((response: AxiosResponse<JsonResponse<Invoice>>) => {
                return response.data.data;
            });
    }

    /**
     * Get latest invoice
     * @returns Promise<Invoice>
     */
    latest() {
        return this.client
            .get<JsonResponse<Invoice>>('1/billing/invoices/latest')
            .then((response: AxiosResponse<JsonResponse<Invoice>>) => {
                return response.data.data;
            });
    }
}

export default Invoices;
