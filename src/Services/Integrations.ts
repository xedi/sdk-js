import {AxiosResponse} from 'axios';
import Service from './Service';
import JsonResponse from '../Interfaces/JsonResponse';
import TaskStatus from "../Models/TaskStatus";
import {Collection, UnleashedCustomer} from "../Models/Models";
import ExternalRequestLog from "../Models/ExternalRequestLog";

/**
 * Integrations
 */
class Integrations extends Service {

    /**
     * Toggle Partnership
     * @returns Promise<>
     */
    toggle(params: object) {
        return this.client
            .post<JsonResponse<any>>(`1/integrations/toggle`, params)
            .then((response: AxiosResponse<JsonResponse<any>>) => {
                return response.data;
            });
    }

    /**
     * Task Status
     * @param params
     */
    status(params: object) {
        return this.client
            .get<JsonResponse<TaskStatus>>(`1/integrations/status`, {params})
            .then((response: AxiosResponse<JsonResponse<TaskStatus>>) => {
                return response.data.data;
            });
    }

    /**
     * Get Config
     * @param params
     */
    getConfig(params: object) {
        return this.client
            .get<JsonResponse<any>>(`1/integrations/getconfig`, {params})
            .then((response: AxiosResponse<JsonResponse<any>>) => {
                return response.data;
            });
    }

    /**
     * Logs
     * @param params
     */
    logs(params: object) {
        return this.client
            .get<JsonResponse<Collection<ExternalRequestLog>>>(`1/integrations/logs`, params)
            .then((response: AxiosResponse<JsonResponse<Collection<ExternalRequestLog>>>) => {
                return response.data.data;
            });
    }

    /**
     * Sync
     * @returns Promise<any[]>
     */
    sync(params: object) {
        return this.client
            .post<JsonResponse<Collection<any>>>(`1/integrations/sync`, params)
            .then((response: AxiosResponse<JsonResponse<Collection<any>>>) => {
                return response.data;
            });
    }
}

export default Integrations;
