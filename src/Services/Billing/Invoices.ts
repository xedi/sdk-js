import Service from "../Service";
import JsonResponse from "../../Interfaces/JsonResponse";
import {Invoice} from "../../Models/Models";
import {AxiosResponse} from "axios";

class Invoices extends Service {

    /**
     * Get upcoming invoice
     * @returns Promise<Business>
     */
    upcoming() {
        return this.client
            .get<JsonResponse<Invoice>>('1/billing/invoice/upcoming')
            .then((response: AxiosResponse<JsonResponse<Invoice>>) => {
                return response.data.data;
            });
    }
}

export default Invoices;
