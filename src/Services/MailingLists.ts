import Service from './Service';
import {AxiosResponse} from 'axios';
import {MailingList} from '../Models/Models';
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
}

export default MailingLists;
