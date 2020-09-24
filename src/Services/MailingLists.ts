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
     * List all mailinglists for a business
     * @param businessXuid
     * @returns Promise<Instance>
     */
    list(businessXuid: Xuid<SupportedXuid.Business>) {
        return this.client
            .get<JsonResponse<Collection<MailingList>>>('1/businesses/' + businessXuid + '/mailinglists')
            .then((resp: AxiosResponse<JsonResponse<Collection<MailingList>>>) => {
                return resp.data.data;
            });
    }
}

export default MailingLists;
