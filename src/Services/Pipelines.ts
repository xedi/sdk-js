import JsonResponse from "../Interfaces/JsonResponse";
import {Collection} from "../Models/Models";
import {AxiosResponse} from "axios";
import Service from "./Service";
import Pipeline from "../Models/Pipeline";
import Xuid, {SupportedXuid} from "../Utils/Xuid";

/**
 * Pipelines
 */
class Pipelines extends Service {

    /**
     * Get all Pipelines
     * @returns Promise<Pipeline>
     */
    list(params: object) {
        return this.client
            .get<JsonResponse<Collection<Pipeline>>>(`1/pipelines`, params)
            .then((response: AxiosResponse<JsonResponse<Collection<Pipeline>>>) => {
                return response.data.data;
            });
    }

    /**
     * Get a pipeline
     * @param pipelineId
     * @returns Promise<Pipeline>
     */
    get(pipelineId: Xuid<SupportedXuid.Pipeline>) {
        return this.client
            .get<JsonResponse<Pipeline>>(`1/pipeline/${pipelineId}`)
            .then((response: AxiosResponse<JsonResponse<Pipeline>>) => {
                return response.data.data;
            });
    }

    /**
     * Create a pipeline
     * @param Pipeline
     * @returns Promise<Pipeline>
     */
    create(pipeline: Pipeline) {
        return this.client
            .post<JsonResponse<Pipeline>>(`1/pipelines`, pipeline)
            .then((response: AxiosResponse<JsonResponse<Pipeline>>) => {
                return response.data.data
            });
    }

    /**
     * Update a  pipeline
     * @param pipelineId
     * @param pipeline
     * @returns Promise<Pipeline>
     */
    update(pipelineId: Xuid<SupportedXuid.Pipeline>, pipeline: Pipeline) {
        return this.client
            .patch<JsonResponse<Pipeline>>(`1/pipelines/${pipelineId}`, pipeline)
            .then((response: AxiosResponse<JsonResponse<Pipeline>>) => {
                return response.data.data
            });
    }

    /**
     * Delete a pipeline
     * @param pipelineId
     * @returns Promise<Pipeline>
     */
    delete(pipelineId: Xuid<SupportedXuid.Pipeline>) {
        return this.client
            .delete<JsonResponse<Pipeline>>(`1/pipelines/${pipelineId}`)
            .then((response: AxiosResponse<JsonResponse<Pipeline>>) => {
                return response;
            });
    }

}

export default Pipelines;
