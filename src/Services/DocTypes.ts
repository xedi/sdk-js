import { AxiosResponse } from 'axios';
import Service from './Service';
import JsonResponse from '../Interfaces/JsonResponse';
import { Collection, DocType } from '../Models/Models';
import Xuid, { SupportedXuid } from '../Utils/Xuid';

/**
 * DocTypes
 */
class DocTypes extends Service
{
    /**
     * Lists DocTypes
     * @returns Promise<DocType[]>
     */
    list()
    {
        return this.client
            .get<JsonResponse<Collection<DocType>>>(`1/doctypes`)
            .then((response: AxiosResponse<JsonResponse<Collection<DocType>>>) => {
                return response.data.data;
            });
    }

    /**
     * Gets DocType
     * @param docTypeId
     * @returns Promise<DocType>
     */
    get(docTypeId: Xuid<SupportedXuid.DocType>) {
        return this.client
            .get<JsonResponse<DocType>>(`1/doctypes/${ docTypeId }`)
            .then((response: AxiosResponse<JsonResponse<DocType>>) => {
                return response.data.data;
            });
    }
}

export default DocTypes;
