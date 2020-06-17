import Service from "../Service";
import JsonResponse from "../../Interfaces/JsonResponse";
import {Subscription} from "../../Models/Models";
import {AxiosResponse} from "axios";

class Subscriptions extends Service {

    /**
     * Check if current business is subscribed to entity
     * TODO@CE: @CS what do you reckon we do for "boolean" responses
     * @param entity_id
     * @returns Promise<Business>
     */
    isSubscribed(entity_id: string) {
        return this.client
            .get<JsonResponse<AxiosResponse>>(`api/functional/product/${entity_id}/isSubscribed`)
            .then((response: AxiosResponse) => {
                return response
            });
    }

    /**
     * Get subscription for current business for a given entity (any purchasable)
     * @param entity_id
     */
    getByEntity(entity_id: string) {
        return this.client
            .get<JsonResponse<Subscription>>(`api/functional/product/${entity_id}/subscription`)
            .then((response: AxiosResponse<JsonResponse<Subscription>>) => {
                return response
            });
    }

    /**
     * Subscribe to entity (Purchase)
     * TODO@CE: @CS what do you reckon we do for "boolean" responses - may need to check what this returns first
     * @param entity_id
     */
    subscribe(entity_id: string) {
        return this.client
            .get<JsonResponse<AxiosResponse>>(`api/functional/product/${entity_id}/subscribe`)
            .then((response: AxiosResponse) => {
                return response
            });
    }

    /**
     * Unsubscribe from entity (Cancel)
     * TODO@CE: @CS what do you reckon we do for "boolean" responses - may need to check what this returns first
     * @param entity_id
     */
    unsubscribe(entity_id: string) {
        return this.client
            .get<JsonResponse<AxiosResponse>>(`api/functional/product/${entity_id}/unsubscribe`)
            .then((response: AxiosResponse) => {
                return response
            });
    }
}

export default Subscriptions;
