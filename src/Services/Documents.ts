import Service from './Service';
import Xuid, {SupportedXuid} from '../Utils/Xuid';
import JsonResponse from '../Interfaces/JsonResponse';
import {Document} from '../Models/Models';
import {AxiosResponse} from 'axios';
import PaginatedJsonResponse from "../Interfaces/PaginatedJsonResponse";
import * as stream from 'stream';

/**
 * Documents
 */
class Documents extends Service {

    /**
     * List documents
     * @param config
     * @returns Promise<PaginatedJsonResponse<Document[]>>
     */
    list(config: object) {
        return this.client
            .get<PaginatedJsonResponse<Document>>(`1/documents`, config)
            .then((response: AxiosResponse<PaginatedJsonResponse<Document>>) => {
                return response.data;
            });
    }

    /**
     * Gets document
     * @param documentId
     * @param config
     * @returns Promise<Document>
     */
    get(documentId: Xuid<SupportedXuid.Document>, config: object) {
        return this.client
            .get<JsonResponse<Document>>(`1/documents/${documentId}`, config)
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
     * Updates document
     * @param document
     * @returns Promise<Document>
     */
    markAsRead(document: Document) {
        return this.client
            .put<JsonResponse<Document>>(`1/documents/${document._id}/read`, document)
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

    /**
     * Search Documents
     * @returns Promise<PaginatedJsonResponse<Document[]>>
     */
    search(params: object, headers: object) {
        return this.client
            .post<PaginatedJsonResponse<Document>>(`1/search/documents`, params, {headers})
            .then((response: AxiosResponse<PaginatedJsonResponse<Document>>) => {
                return response.data;
            });
    }

    /**
     * converts documents to pdf
     * @param documentId
     *
     * @returns Promise<PDF>
     */
    convert(documentId: Xuid<SupportedXuid.Document>) {
        return this.client
            .get<Blob>(`1/documents/${documentId}/convert`, { responseType: 'blob' })
            .then((response: AxiosResponse<Blob>) => {
                return response;
            });
    }
}
export default Documents;