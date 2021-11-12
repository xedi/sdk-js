import Service from "./Service";
import JsonResponse from "../Interfaces/JsonResponse";
import {Collection, Mailbox} from "../Models/Models";
import {AxiosResponse} from "axios";
import Xuid, {SupportedXuid} from "../Utils/Xuid";
import PaginatedJsonResponse from "../Interfaces/PaginatedJsonResponse";

/**
 * Mailboxes Service
 */
class Mailboxes extends Service {

    /**
     * Lists mailboxes
     * @param params
     * @returns Promise<PaginatedJsonResponse<Mailbox[]>>
     */
    list(params: object) {
        return this.client
            .get<PaginatedJsonResponse<Mailbox>>(`1/mailboxes`, {params})
            .then((response: AxiosResponse<PaginatedJsonResponse<Mailbox>>) => {
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
            .get<JsonResponse<Collection<Mailbox>>>(`1/businesses/${businessXuid}/mailboxes`)
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
            .get<JsonResponse<Mailbox>>(`1/mailboxes/${mailboxId}`)
            .then((response: AxiosResponse<JsonResponse<Mailbox>>) => {
                return response.data.data;
            });
    }

    /**
     * Create mailbox
     * @param mailbox
     * @returns Promise<Mailbox>
     */
    create(mailbox: Mailbox) {
        return this.client
            .post<JsonResponse<Mailbox>>(`1/mailboxes`, mailbox)
            .then((response: AxiosResponse<JsonResponse<Mailbox>>) => {
                return response.data.data;
            });
    }

    /**
     * Update mailbox
     * @param mailbox
     * @returns Promise<Mailbox>
     */
    update(mailbox: Mailbox) {
        return this.client
            .patch<JsonResponse<Mailbox>>(`1/mailboxes/` + mailbox._id, mailbox)
            .then((response: AxiosResponse<JsonResponse<Mailbox>>) => {
                return response.data.data;
            });
    }

    /**
     * Delete a mailbox
     * @param mailboxId
     * @return JsonResponse<null>
     */
    delete(mailboxId:  Xuid<SupportedXuid.Mailbox>) {
        return this.client
            .delete<JsonResponse<null>>('1/mailboxes/' + mailboxId)
            .then((response: AxiosResponse<JsonResponse<null>>) => {
                return response.data.data;
            });
    }
}

export default Mailboxes;
