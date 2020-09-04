import Service from "../Service";
import JsonResponse from "../../Interfaces/JsonResponse";
import {Subscription} from "../../Models/Models";
import {AxiosResponse} from "axios";

class Subscriptions extends Service {

    /**
     * Check if current business is subscribed to entity
     *
     * @param entityId
     * @returns Promise<Business>
     */
    isSubscribed(entityId: string) {
        return this.client
            .get<JsonResponse<AxiosResponse>>(`1/billing/subscriptions/${entityId}/isSubscribed`)
            .then((response: AxiosResponse) => {
                return response
            });
    }

    /**
     * Get subscription for current business for a given entity (any purchasable)
     * @param entityId
     */
    getByEntity(entityId: string) {
        return this.client
            .get<JsonResponse<Subscription>>(`api/functional/product/${entityId}/subscription`)
            .then((response: AxiosResponse<JsonResponse<Subscription>>) => {
                return response
            });
    }

    /**
     * Subscribe to entity (Purchase)
     *
     * @param entityId
     */
    subscribe(entityId: string) {
        return this.client
            .get<JsonResponse<AxiosResponse>>(`1/billing/subscriptions/${entityId}/subscribe`)
            .then((response: AxiosResponse) => {
                return response
            });
    }

    /**
     * Unsubscribe from entity (Cancel)
     *
     * @param entityId
     */
    unsubscribe(entityId: string) {
        return this.client
            .get<JsonResponse<AxiosResponse>>(`1/billing/subscriptions/${entityId}/unsubscribe`)
            .then((response: AxiosResponse) => {
                return response
            });
    }
}

export default Subscriptions;