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
     * @returns Promise<Mailbox[]>
     */
    list() {
        return this.client
            .get<JsonResponse<Collection<Mailbox>>>(`1/mailboxes`)
            .then((response: AxiosResponse<JsonResponse<Collection<Mailbox>>>) => {
                return response.data.data;
            });
    }

    /**
     * Lists by business
     * @param business_uuid
     * @returns Promise<Mailbox[]>
     */
    listByBusiness(business_uuid: Xuid<SupportedXuid.Business>) {
        return this.client
            .get<JsonResponse<Collection<Mailbox>>>(`1/businesses/${ business_uuid }/mailboxes`)
            .then((response: AxiosResponse<JsonResponse<Collection<Mailbox>>>) => {
                return response.data.data;
            });
    }

    /**
     * Gets mailboxes
     * @param mailbox_id
     * @returns Promise<Mailbox>
     */
    get(mailbox_id: Xuid<SupportedXuid.Mailbox>) {
        return this.client
            .get<JsonResponse<Mailbox>>(`1/mailboxes/${ mailbox_id }`)
            .then((response: AxiosResponse<JsonResponse<Mailbox>>) => {
                return response.data.data;
            });
    }
}

export default Mailboxes;
