import JsonResponse from "../Interfaces/JsonResponse";
import {Collection} from "../Models/Models";
import {AxiosResponse} from "axios";
import Service from "./Service";
import Task from "../Models/Task";
import Xuid, {SupportedXuid} from "../Utils/Xuid";

/**
 * Tasks
 */
class Tasks extends Service {

    /**
     * Get all Tasks
     * @returns Promise<Task>
     */
    list(params: object) {
        return this.client
            .get<JsonResponse<Collection<Task>>>(`1/tasks`, params)
            .then((response: AxiosResponse<JsonResponse<Collection<Task>>>) => {
                return response.data.data;
            });
    }

    /**
     * Get task by operation name
     * @returns Promise<Task>
     */
    getByOperation(operation: string) {
        return this.client
            .get<JsonResponse<Collection<Task>>>(`1/tasks/operations/${operation}`)
            .then((response: AxiosResponse<JsonResponse<Collection<Task>>>) => {
                return response.data.data;
            });
    }

    /**
     * Get a task
     * @param taskId
     * @returns Promise<Task>
     */
    get(taskId: Xuid<SupportedXuid.Task>) {
        return this.client
            .get<JsonResponse<Task>>(`1/task/${taskId}`)
            .then((response: AxiosResponse<JsonResponse<Task>>) => {
                return response.data.data;
            });
    }

    /**
     * Create a task
     * @param Task
     * @returns Promise<Task>
     */
    create(task: Task) {
        return this.client
            .post<JsonResponse<Task>>(`1/tasks`, task)
            .then((response: AxiosResponse<JsonResponse<Task>>) => {
                return response.data.data
            });
    }

    /**
     * Update a  task
     * @param taskId
     * @param task
     * @returns Promise<Task>
     */
    update(taskId: Xuid<SupportedXuid.Task>, task: Task) {
        return this.client
            .patch<JsonResponse<Task>>(`1/tasks/${taskId}`, task)
            .then((response: AxiosResponse<JsonResponse<Task>>) => {
                return response.data.data
            });
    }

    /**
     * Delete a task
     * @param taskId
     * @returns Promise<Task>
     */
    delete(taskId: Xuid<SupportedXuid.Task>) {
        return this.client
            .delete<JsonResponse<Task>>(`1/tasks/${taskId}`)
            .then((response: AxiosResponse<JsonResponse<Task>>) => {
                return response;
            });
    }
}

export default Tasks;
