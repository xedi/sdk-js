import Service from "../Service";
import JsonResponse from "../../Interfaces/JsonResponse";
import {Collection, Invoice} from "../../Models/Models";
import {AxiosResponse} from "axios";

class Invoices extends Service {

    /**
     * Get invoices
     *
     * @param params
     *
     * @returns Promise<Invoice>
     */
    list(params: object) {
        return this.client
            .get<JsonResponse<Collection<Invoice>>>('1/billing/invoices', params)
            .then((response: AxiosResponse<JsonResponse<Collection<Invoice>>>) => {
                return response.data.data;
            });
    }

    /**
     * Get upcoming invoice
     *
     * @param params
     *
     * @returns Promise<Invoice>
     */
    upcoming(params: object) {
        return this.client
            .get<JsonResponse<Invoice>>('1/billing/invoices/upcoming', params)
            .then((response: AxiosResponse<JsonResponse<Invoice>>) => {
                return response.data.data;
            });
    }

    /**
     * Get unpaid invoices
     * @returns Promise<Invoice>
     */
    unpaid() {
        return this.client
            .get<JsonResponse<Invoice>>('1/billing/invoices/unpaid')
            .then((response: AxiosResponse<JsonResponse<Invoice>>) => {
                return response.data.data;
            });
    }

    pay(invoiceId: string) {
        return this.client
            .get<JsonResponse<Invoice>>('1/billing/invoices/' + invoiceId + '/pay')
            .then((response: AxiosResponse<JsonResponse<Invoice>>) => {
                return response.data;
            });
    }
}

export default Invoices;
