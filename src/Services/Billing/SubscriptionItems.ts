import Service from "../Service";
import JsonResponse from "../../Interfaces/JsonResponse";
import {SubscriptionItem} from "../../Models/Models";
import {AxiosResponse} from "axios";

class SubscriptionItems extends Service {

    /**
     * Get subscription item by its entity id
     * @param entityId
     */
    getByEntity(entityId: string) {
        return this.client
            .get<JsonResponse<SubscriptionItem>>(`1/billing/subscriptionItems/${entityId}`)
            .then((response: AxiosResponse<JsonResponse<SubscriptionItem>>) => {
                return response.data.data
            });
    }

    upcomingUsage() {
        return this.client
            .get<JsonResponse<SubscriptionItem>>(`1/billing/invoices/upcoming/usage`)
            .then((response: AxiosResponse<JsonResponse<SubscriptionItem>>) => {
                return response.data
            });
    }
}

export default SubscriptionItems;
