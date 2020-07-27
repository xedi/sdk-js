import Service from "./Service";
import JsonResponse from "../Interfaces/JsonResponse";
import { Collection, Mailbox } from "../Models/Models";
import { AxiosResponse } from "axios";
import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Mailboxes Service
 */
class Mailboxes extends Service {

    /**
     * Lists mailboxes
     * @param params
     * @returns Promise<Mailbox[]>
     */
    list(params: object) {
        return this.client
            .get<JsonResponse<Collection<Mailbox>>>(`1/mailboxes`, {params})
            .then((response: AxiosResponse<JsonResponse<Collection<Mailbox>>>) => {
                return response.data;
            });
    }

    /**
     * Lists by business
     * @param businessXuid
     * @returns Promise<Mailbox[]>
     */
    listByBusiness(businessXuid: Xuid<SupportedXuid.Business>) {
        return this.client
            .get<JsonResponse<Collection<Mailbox>>>(`1/businesses/${ businessXuid }/mailboxes`)
            .then((response: AxiosResponse<JsonResponse<Collection<Mailbox>>>) => {
                return response.data.data;
            });
    }

    /**
     * Gets mailboxes
     * @param mailboxId
     * @returns Promise<Mailbox>
     */
    get(mailboxId: Xuid<SupportedXuid.Mailbox>) {
        return this.client
            .get<JsonResponse<Mailbox>>(`1/mailboxes/${ mailboxId }`)
            .then((response: AxiosResponse<JsonResponse<Mailbox>>) => {
                return response.data.data;
            });
    }
}

export default Mailboxes;
