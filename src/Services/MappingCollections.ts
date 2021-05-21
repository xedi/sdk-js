import Service from './Service';
import Xuid, {SupportedXuid} from '../Utils/Xuid';
import JsonResponse from '../Interfaces/JsonResponse';
import {Field, MappingCollection} from '../Models/Models';
import {AxiosResponse} from 'axios';
import PaginatedJsonResponse from "../Interfaces/PaginatedJsonResponse";
import Mapping from "../Models/Mapping";

/**
 * Mapping Collections
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

    /**
     * Gets fields for mapping collection
     * @param mappingCollectionId
     * @returns Promise<Field[]>
     */
    fields(mappingCollectionId: Xuid<SupportedXuid.MappingCollection>) {
        return this.client
            .get<JsonResponse<Field>>(`1/mappingcollections/${mappingCollectionId}/fields`)
            .then((response: AxiosResponse<JsonResponse<Field>>) => {
                return response.data.data;
            });
    }

    /**
     * Gets mappings for mapping collection
     * @param format
     * @returns Promise<Mapping[]>
     */
    mappings(format: string) {
        return this.client
            .get<JsonResponse<Mapping>>(`1/mappingcollections/${format}/mappings`)
            .then((response: AxiosResponse<JsonResponse<Mapping>>) => {
                return response.data.data;
            });
    }
}

export default MappingCollections;
