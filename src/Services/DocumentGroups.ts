import Service from './Service';
import Xuid, {SupportedXuid} from '../Utils/Xuid';
import JsonResponse from '../Interfaces/JsonResponse';
import {DocumentGroup} from '../Models/Models';
import {AxiosResponse} from 'axios';
import PaginatedJsonResponse from "../Interfaces/PaginatedJsonResponse";

/**
 * Document Groups
 */
class DocumentGroups extends Service {

    /**
     * List document groups
     * @param config
     * @returns Promise<PaginatedJsonResponse<DocumentGroup[]>>
     */
    list(config: object) {
        return this.client
            .get<PaginatedJsonResponse<DocumentGroup>>(`1/documentgroups`, config)
            .then((response: AxiosResponse<PaginatedJsonResponse<DocumentGroup>>) => {
                return response.data;
            });
    }

    /**
     * Gets document group
     * @param documentGroupId
     * @param config
     * @returns Promise<DocumentGroup>
     */
    get(documentGroupId: Xuid<SupportedXuid.DocumentGroup>, config: object) {
        return this.client
            .get<JsonResponse<DocumentGroup>>(`1/documentgroups/${documentGroupId}`, config)
            .then((response: AxiosResponse<JsonResponse<DocumentGroup>>) => {
                return response.data.data;
            });
    }

    /**
     * Creates document group
     * @param documentGroup
     * @returns Promise<DocumentGroup>
     */
    create(documentGroup: DocumentGroup) {
        return this.client
            .post<JsonResponse<DocumentGroup>>(`1/documentgroups`, documentGroup)
            .then((response: AxiosResponse<JsonResponse<DocumentGroup>>) => {
                return response.data.data
            });
    }

    /**
     * Updates document group
     * @param documentGroup
     * @returns Promise<DocumentGroup>
     */
    update(documentGroup: DocumentGroup) {
        return this.client
            .patch<JsonResponse<DocumentGroup>>(`1/documentgroups/${documentGroup._id}`, documentGroup)
            .then((response: AxiosResponse<JsonResponse<DocumentGroup>>) => {
                return response.data.data
            });
    }

    /**
     * Deletes document group
     * @param documentGroupId
     * @returns Promise<DocumentGroup>
     */
    delete(documentGroupId: Xuid<SupportedXuid.DocumentGroup>) {
        return this.client
            .delete<JsonResponse<DocumentGroup>>(`1/documentgroups/${documentGroupId}`)
            .then((response: AxiosResponse<JsonResponse<DocumentGroup>>) => {
                return response;
            });
    }
}

export default DocumentGroups;
