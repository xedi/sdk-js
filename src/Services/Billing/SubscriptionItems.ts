import Service from "../Service";
import JsonResponse from "../../Interfaces/JsonResponse";
import {SubscriptionItem} from "../../Models/Models";
import {AxiosResponse} from "axios";

class SubscriptionItems extends Service
{

    /**
     * Get subscription item by its entity id
     * @param entityId
     */
    getByEntity(entityId: string) {
        return this.client
            .get<JsonResponse<SubscriptionItem>>(`api/functional/product/${entityId}/subscriptionItem`)
            .then((response: AxiosResponse<JsonResponse<SubscriptionItem>>) => {
                return response
            });
    }
}

export default SubscriptionItems;
