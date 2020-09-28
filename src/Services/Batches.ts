import Service from './Service';
import Xuid, {SupportedXuid} from '../Utils/Xuid';
import JsonResponse from '../Interfaces/JsonResponse';
import {Batch} from '../Models/Models';
import {AxiosResponse} from 'axios';
import PaginatedJsonResponse from "../Interfaces/PaginatedJsonResponse";

/**
 * Batches
 */
class Batches extends Service {

    /**
     * List batches
     * @param params
     * @returns Promise<PaginatedJsonResponse<Batch[]>>
     */
    list(params: object) {
        return this.client
            .get<PaginatedJsonResponse<Batch>>(`1/batches`, {params})
            .then((response: AxiosResponse<PaginatedJsonResponse<Batch>>) => {
                return response.data;
            });
    }

    /**
     * Gets batch
     * @param batchId
     * @returns Promise<Batch>
     */
    get(batchId: Xuid<SupportedXuid.Batch>) {
        return this.client
            .get<JsonResponse<Batch>>(`1/batches/${batchId}`)
            .then((response: AxiosResponse<JsonResponse<Batch>>) => {
                return response.data.data;
            });
    }

    /**
     * Creates batch
     * @param batch
     * @returns Promise<Batch>
     */
    create(batch: Batch) {
        return this.client
            .post<JsonResponse<Batch>>(`1/batches`, batch)
            .then((response: AxiosResponse<JsonResponse<Batch>>) => {
                return response.data.data
            });
    }

    /**
     * Updates batch
     * @param batch
     * @returns Promise<Batch>
     */
    update(batch: Batch) {
        return this.client
            .patch<JsonResponse<Batch>>(`1/batches/${batch._id}`, batch)
            .then((response: AxiosResponse<JsonResponse<Batch>>) => {
                return response.data.data
            });
    }

    /**
     * Deletes batch
     * @param batchId
     * @returns Promise<Batch>
     */
    delete(batchId: Xuid<SupportedXuid.Batch>) {
        return this.client
            .delete<JsonResponse<Batch>>(`1/batches/${batchId}`)
            .then((response: AxiosResponse<JsonResponse<Batch>>) => {
                return response;
            });
    }
}

export default Batches;
