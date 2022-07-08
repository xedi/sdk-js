import {AxiosResponse} from 'axios';
import Service from './Service';
import JsonResponse from '../Interfaces/JsonResponse';
import Xuid, {SupportedXuid} from '../Utils/Xuid';
import TaskStatus from "../Models/TaskStatus";

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
}

export default Integrations;
