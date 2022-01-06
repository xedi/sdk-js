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
                return response.data;
            });
    }

    /**
     * Get subscription for current business for a given entity (any purchasable)
     * @param entityId
     */
    getByEntity(entityId: string) {
        return this.client
            .get<JsonResponse<Subscription>>(`1/billing/functional/product/${entityId}/subscription`)
            .then((response: AxiosResponse<JsonResponse<Subscription>>) => {
                return response.data;
            });
    }
    /**
     * Get subscription for current business for a given entity (any purchasable)
     * @param params
     */
    createCheckoutSession(params: object ) {
        return this.client
            .post<JsonResponse<Subscription>>(`1/billing/subscriptions/create-checkout-session`, params)
            .then((response: AxiosResponse<JsonResponse<Subscription>>) => {
                return response.data;
            });
    }

    /**
     * Subscribe to entity (Purchase)
     *
     * @param entityId
     * @param params
     */
    subscribe(entityId: string, params:object) {
        return this.client
            .post<JsonResponse<AxiosResponse>>(`1/billing/subscriptions/${entityId}/subscribe`, params)
            .then((response: AxiosResponse) => {
                return response.data;
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
                return response.data
            });
    }


    /**
     * Get basic subscription data and totals for a business
     * @param businessId
     */
    getSubscriptionTotals(businessId: string) {
        return this.client
            .get<JsonResponse<null>>(`1/businesses/${businessId}/subscriptions`)
            .then((response:AxiosResponse<JsonResponse<null>>) => {
                return response.data;
            });
    }

}

export default Subscriptions;
