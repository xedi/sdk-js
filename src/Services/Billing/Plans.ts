import Service from "../Service";
import JsonResponse from "../../Interfaces/JsonResponse";
import {Plan} from "../../Models/Models";
import {AxiosResponse} from "axios";

class Plans extends Service {

    /**
     * Get a products plan by its entity ID
     * @param entityId
     */
    getByEntity(entityId: string) {
        return this.client
            .get<JsonResponse<Plan>>(`1/billing/products/${entityId}/plan`)
            .then((response: AxiosResponse<JsonResponse<Plan>>) => {
                return response.data.data
            });
    }
}

export default Plans;
