import Service from "../Service";
import JsonResponse from "../../Interfaces/JsonResponse";
import {SubscriptionItem} from "../../Models/Models";
import {AxiosResponse} from "axios";

class SubscriptionItems extends Service
{

    /**
     * Get subscription item by its entity id
     * @param entity_id
     */
    getByEntity(entity_id: string) {
        return this.client
            .get<JsonResponse<SubscriptionItem>>(`api/functional/product/${entity_id}/subscriptionItem`)
            .then((response: AxiosResponse<JsonResponse<SubscriptionItem>>) => {
                return response
            });
    }
}

export default SubscriptionItems;
