import JsonResponse from "../Interfaces/JsonResponse";
import {Collection} from "../Models/Models";
import {AxiosResponse} from "axios";
import Service from "./Service";
import TaskArgument from "../Models/TaskArgument";
import TaskValue from "../Models/TaskValue";
import Xuid, {SupportedXuid} from "../Utils/Xuid";

/**
 * TaskArguments
 */
class TaskArguments extends Service {

    /**
     * Get all TaskArguments
     * @returns Promise<TaskArgument>
     */
    list(params: object) {
        return this.client
            .get<JsonResponse<Collection<TaskArgument>>>(`1/taskArguments`, params)
            .then((response: AxiosResponse<JsonResponse<Collection<TaskArgument>>>) => {
                return response.data.data;
            });
    }

    /**
     * Get a taskArgument
     * @param taskArgumentId
     * @returns Promise<TaskArgument>
     */
    get(taskArgumentId: Xuid<SupportedXuid.TaskArgument>) {
        return this.client
            .get<JsonResponse<TaskArgument>>(`1/taskArgument/${taskArgumentId}`)
            .then((response: AxiosResponse<JsonResponse<TaskArgument>>) => {
                return response.data.data;
            });
    }

    /**
     * Create a taskArgument
     * @param TaskArgument
     * @returns Promise<TaskArgument>
     */
    create(taskArgument: TaskArgument) {
        return this.client
            .post<JsonResponse<TaskArgument>>(`1/taskArguments`, taskArgument)
            .then((response: AxiosResponse<JsonResponse<TaskArgument>>) => {
                return response.data.data
            });
    }

    /**
     * Create a taskArgument value
     * @param TaskValue
     * @returns Promise<TaskValue>
     */
    setValue(taskValue: TaskValue) {
        return this.client
            .post<JsonResponse<TaskValue>>(`1/taskArguments/value`, taskValue)
            .then((response: AxiosResponse<JsonResponse<TaskValue>>) => {
                return response.data.data
            });
    }

    /**
     * Update a  taskArgument
     * @param taskArgumentId
     * @param taskArgument
     * @returns Promise<TaskArgument>
     */
    update(taskArgumentId: Xuid<SupportedXuid.TaskArgument>, taskArgument: TaskArgument) {
        return this.client
            .patch<JsonResponse<TaskArgument>>(`1/taskArguments/${taskArgumentId}`, taskArgument)
            .then((response: AxiosResponse<JsonResponse<TaskArgument>>) => {
                return response.data.data
            });
    }

    /**
     * Delete a taskArgument
     * @param taskArgumentId
     * @returns Promise<TaskArgument>
     */
    delete(taskArgumentId: Xuid<SupportedXuid.TaskArgument>) {
        return this.client
            .delete<JsonResponse<TaskArgument>>(`1/taskArguments/${taskArgumentId}`)
            .then((response: AxiosResponse<JsonResponse<TaskArgument>>) => {
                return response;
            });
    }

}

export default TaskArguments;
