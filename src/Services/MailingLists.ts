import Service from './Service';
import {AxiosResponse} from 'axios';
import {Collection, MailingList} from '../Models/Models';
import JsonResponse from '../Interfaces/JsonResponse';
import Xuid, {SupportedXuid} from "../Utils/Xuid";
import PaginatedJsonResponse from "../Interfaces/PaginatedJsonResponse";

class MailingLists extends Service {

    /**
     * Create an Mailing List
     * @param mailinglist
     * @returns Promise<Instance>
     */
    create(mailinglist: MailingList) {
        return this.client
            .post<JsonResponse<MailingList>>(`1/mailinglists`, mailinglist)
            .then((response: AxiosResponse<JsonResponse<MailingList>>) => {
                return response.data.data
            });
    }

    /**
     * List all mailing lists for a business
     * @param businessXuid
     * @returns Promise<Instance>
     */
    getByBusiness(businessXuid: Xuid<SupportedXuid.Business>) {
        return this.client
            .get<JsonResponse<Collection<MailingList>>>('1/businesses/' + businessXuid + '/mailinglists')
            .then((resp: AxiosResponse<JsonResponse<Collection<MailingList>>>) => {
                return resp.data.data;
            });
    }

    /**
     * Get a mailing list
     * @param mailinglistXuid
     * @returns Promise<Instance>
     */
    get(mailinglistXuid: Xuid<SupportedXuid.MailingList>) {
        return this.client
            .get<JsonResponse<MailingList>>('1/mailinglists/' + mailinglistXuid )
            .then((response: AxiosResponse<JsonResponse<MailingList>>) => {
                return response.data.data;
            });
    }

    /**
     * Update a mailing list
     * @param MailingList
     * @returns Promise<Instance>
     */
    update(mailinglist: MailingList) {
        return this.client
            .patch<JsonResponse<MailingList>>('1/mailinglists/' + mailinglist._id , mailinglist)
            .then((response: AxiosResponse<JsonResponse<MailingList>>) => {
                return response.data.data
            });
    }

    /**
     * Delete a mailing list
     * @param mailinglistXuid
     * @returns Promise<Instance>
     */
    delete(mailinglistXuid: Xuid<SupportedXuid.MailingList>) {
        return this.client
            .get<JsonResponse<null>>('1/mailinglists/' + mailinglistXuid )
            .then((response: AxiosResponse<JsonResponse<null>>) => {
                return response.data.data;
            });
    }
}

export default MailingLists;
