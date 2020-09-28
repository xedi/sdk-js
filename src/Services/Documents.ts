import Service from './Service';
import Xuid, {SupportedXuid} from '../Utils/Xuid';
import JsonResponse from '../Interfaces/JsonResponse';
import {Document} from '../Models/Models';
import {AxiosResponse} from 'axios';
import PaginatedJsonResponse from "../Interfaces/PaginatedJsonResponse";

/**
 * Documents
 */
class Documents extends Service {

    /**
     * List documents
     * @param params
     * @returns Promise<PaginatedJsonResponse<Document[]>>
     */
    list(params: object) {
        return this.client
            .get<PaginatedJsonResponse<Document>>(`1/documents`, {params})
            .then((response: AxiosResponse<PaginatedJsonResponse<Document>>) => {
                return response.data;
            });
    }

    /**
     * Gets document
     * @param documentId
     * @returns Promise<Document>
     */
    get(documentId: Xuid<SupportedXuid.Document>) {
        return this.client
            .get<JsonResponse<Document>>(`1/documents/${documentId}`)
            .then((response: AxiosResponse<JsonResponse<Document>>) => {
                return response.data.data;
            });
    }

    /**
     * Creates document
     * @param document
     * @returns Promise<Document>
     */
    create(document: Document) {
        return this.client
            .post<JsonResponse<Document>>(`1/documents`, document)
            .then((response: AxiosResponse<JsonResponse<Document>>) => {
                return response.data.data
            });
    }

    /**
     * Updates document
     * @param document
     * @returns Promise<Document>
     */
    update(document: Document) {
        return this.client
            .patch<JsonResponse<Document>>(`1/documents/${document._id}`, document)
            .then((response: AxiosResponse<JsonResponse<Document>>) => {
                return response.data.data
            });
    }

    /**
     * Deletes document
     * @param documentId
     * @returns Promise<Document>
     */
    delete(documentId: Xuid<SupportedXuid.Document>) {
        return this.client
            .delete<JsonResponse<Document>>(`1/documents/${documentId}`)
            .then((response: AxiosResponse<JsonResponse<Document>>) => {
                return response;
            });
    }
}

export default Documents;
