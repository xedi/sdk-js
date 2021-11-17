import {AxiosResponse} from 'axios';
import Service from './Service';
import JsonResponse from '../Interfaces/JsonResponse';
import {Collection, DocumentType} from '../Models/Models';
import Xuid, {SupportedXuid} from '../Utils/Xuid';

/**
 * Document types
 */
class DocumentTypes extends Service {
    /**
     * Lists Document types
     * @returns Promise<DocumentType[]>
     */
    list(params: object) {
        return this.client
            .get<JsonResponse<Collection<DocumentType>>>(`1/documenttypes`, params)
            .then((response: AxiosResponse<JsonResponse<Collection<DocumentType>>>) => {
                return response.data;
            });
    }

    /**
     * Gets Document type
     * @param documentTypeId
     * @returns Promise<DocumentType>
     */
    get(documentTypeId: Xuid<SupportedXuid.DocType>) {
        return this.client
            .get<JsonResponse<DocumentType>>(`1/documenttypes/${documentTypeId}`)
            .then((response: AxiosResponse<JsonResponse<DocumentType>>) => {
                return response.data.data;
            });
    }
}

export default DocumentTypes;
