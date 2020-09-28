import Service from './Service';
import Xuid, {SupportedXuid} from '../Utils/Xuid';
import JsonResponse from '../Interfaces/JsonResponse';
import {MappingCollection} from '../Models/Models';
import {AxiosResponse} from 'axios';
import PaginatedJsonResponse from "../Interfaces/PaginatedJsonResponse";

/**
 * Mapping Collections Groups
 */
class MappingCollections extends Service {

    /**
     * List mapping collections
     * @param params
     * @returns Promise<PaginatedJsonResponse<MappingCollection[]>>
     */
    list(params: object) {
        return this.client
            .get<PaginatedJsonResponse<MappingCollection>>(`1/mappingcollections`, {params})
            .then((response: AxiosResponse<PaginatedJsonResponse<MappingCollection>>) => {
                return response.data;
            });
    }

    /**
     * Gets mapping collection
     * @param mappingCollectionId
     * @returns Promise<MappingCollection>
     */
    get(mappingCollectionId: Xuid<SupportedXuid.MappingCollection>) {
        return this.client
            .get<JsonResponse<MappingCollection>>(`1/mappingcollections/${mappingCollectionId}`)
            .then((response: AxiosResponse<JsonResponse<MappingCollection>>) => {
                return response.data.data;
            });
    }

    /**
     * Creates mapping collection
     * @param mappingCollection
     * @returns Promise<MappingCollection>
     */
    create(mappingCollection: MappingCollection) {
        return this.client
            .post<JsonResponse<MappingCollection>>(`1/mappingcollections`, mappingCollection)
            .then((response: AxiosResponse<JsonResponse<MappingCollection>>) => {
                return response.data.data
            });
    }

    /**
     * Updates mapping collection
     * @param mappingCollection
     * @returns Promise<MappingCollection>
     */
    update(mappingCollection: MappingCollection) {
        return this.client
            .patch<JsonResponse<MappingCollection>>(`1/mappingcollections/${mappingCollection._id}`, mappingCollection)
            .then((response: AxiosResponse<JsonResponse<MappingCollection>>) => {
                return response.data.data
            });
    }

    /**
     * Deletes mapping collection
     * @param mappingCollectionId
     * @returns Promise<MappingCollection>
     */
    delete(mappingCollectionId: Xuid<SupportedXuid.MappingCollection>) {
        return this.client
            .delete<JsonResponse<MappingCollection>>(`1/mappingcollections/${mappingCollectionId}`)
            .then((response: AxiosResponse<JsonResponse<MappingCollection>>) => {
                return response;
            });
    }
}

export default MappingCollections;
