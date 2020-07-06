import Service from "../Service";
import JsonResponse from "../../Interfaces/JsonResponse";
import {Card, Collection} from "../../Models/Models";
import {AxiosResponse} from "axios";

class Cards extends Service {

    /**
     * List cards
     * @returns Promise<Card>
     */
    list() {
        return this.client
            .get<JsonResponse<Collection<Card>>>(`1/billing/cards`)
            .then((response: AxiosResponse<JsonResponse<Collection<Card>>>) => {
                return response.data.data;
            });
    }

    /**
     * Gets a card
     * @param cardId
     * @returns Promise<Card>
     */
    get(cardId: string) {
        return this.client
            .get<JsonResponse<Card>>(`1/billing/cards/${cardId}`)
            .then((response: AxiosResponse<JsonResponse<Card>>) => {
                return response.data.data;
            });
    }

    /**
     * Creates card
     * @param card
     * @returns Promise<Card>
     */
    create(card: Card) {
        return this.client
            .post<JsonResponse<Card>>(`1/cards`, card)
            .then((response: AxiosResponse<JsonResponse<Card>>) => {
                return response.data.data
            });
    }

    /**
     * Updates card
     * @param card
     * @returns Promise<Card>
     */
    update(card: Card) {
        return this.client
            .patch<JsonResponse<Card>>(`1/billing/cards/${card.id}`, card)
            .then((response: AxiosResponse<JsonResponse<Card>>) => {
                return response.data.data
            });
    }

    /**
     * Deletes card
     * @param cardId
     * @returns Promise<Card>
     */
    delete(cardId: string) {
        return this.client
            .delete<JsonResponse<Card>>(`1/billing/cards/${cardId}`)
            .then((response: AxiosResponse<JsonResponse<Card>>) => {
                return response;
            });
    }
}

export default Cards;
