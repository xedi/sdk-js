import JsonResponse from "../Interfaces/JsonResponse";
import {Collection} from "../Models/Models";
import {AxiosResponse} from "axios";
import Service from "./Service";
import Stage from "../Models/Stage";
import Xuid, {SupportedXuid} from "../Utils/Xuid";

/**
 * Stage
 */
class Stages extends Service {
    /**
     * Get all stages
     * @returns Promise<Stage>
     */
    list() {
        return this.client
            .get<JsonResponse<Collection<Stage>>>(`1/stages`)
            .then((response: AxiosResponse<JsonResponse<Collection<Stage>>>) => {
                return response.data.data;
            });
    }

    /**
     * Gets stages
     * @param stageId
     * @returns Promise<Stage>
     */
    get(stageId: Xuid<SupportedXuid.Stage>) {
        return this.client
            .get<JsonResponse<Stage>>(`1/stages/${stageId}`)
            .then((response: AxiosResponse<JsonResponse<Stage>>) => {
                return response.data.data;
            });
    }

    /**
     * Create a stage
     * @param stage
     * @returns Promise<Stage>
     */
    create(stage: Stage) {
        return this.client
            .post<JsonResponse<Stage>>(`1/stages`, stage)
            .then((response: AxiosResponse<JsonResponse<Stage>>) => {
                return response.data.data
            });
    }

    setState(stage: Stage) {
        return this.client
            .post<JsonResponse<Stage>>(`1/stages/${stage._id}/mark/${stage.state}`)
            .then((response: AxiosResponse<JsonResponse<Stage>>) => {
                return response.data.data
            });
    }

    /**
     * Update a  stage
     * @param stageId
     * @param stage
     * @returns Promise<Stage>
     */
    update(stageId: Xuid<SupportedXuid.Stage>, stage: Stage) {
        return this.client
            .patch<JsonResponse<Stage>>(`1/stages/${stageId}`, stage)
            .then((response: AxiosResponse<JsonResponse<Stage>>) => {
                return response.data.data
            });
    }

    /**
     * Delete a stage
     * @param stageId
     * @returns Promise<Stage>
     */
    delete(stageId: Xuid<SupportedXuid.Stage>) {
        return this.client
            .delete<JsonResponse<Stage>>(`1/stages/${stageId}`)
            .then((response: AxiosResponse<JsonResponse<Stage>>) => {
                return response;
            });
    }
}

export default Stages;
