import Service from "../Service";
import JsonResponse from "../../Interfaces/JsonResponse";
import {Plan} from "../../Models/Models";
import {AxiosResponse} from "axios";

class Plans extends Service {

    /**
     * Get a products plan by its entity ID
     * @param entity_id
     */
    getByEntity(entity_id: string) {
        return this.client
            .get<JsonResponse<Plan>>(`api/functional/product/${entity_id}/plan`)
            .then((response: AxiosResponse<JsonResponse<Plan>>) => {
                return response
            });
    }
}

export default Plans;
