import Service from './Service';
import Xuid, {SupportedXuid} from '../Utils/Xuid';
import JsonResponse from '../Interfaces/JsonResponse';
import {Setting} from '../Models/Models';
import {AxiosResponse} from 'axios';
import PaginatedJsonResponse from "../Interfaces/PaginatedJsonResponse";

/**
 * Settings
 */
class Settings extends Service {

    /**
     * Get by business
     * @param params
     * @returns Promise<PaginatedJsonResponse<Setting[]>>
     */
    list(params: object) {
        return this.client
            .get<PaginatedJsonResponse<Setting>>(`1/settings`, {params})
            .then((response: AxiosResponse<PaginatedJsonResponse<Setting>>) => {
                return response.data;
            });
    }

    /**
     * Gets settings
     * @param settingId
     * @returns Promise<Setting>
     */
    get(settingId: Xuid<SupportedXuid.Setting>) {
        return this.client
            .get<JsonResponse<Setting>>(`1/settings/${settingId}`)
            .then((response: AxiosResponse<JsonResponse<Setting>>) => {
                return response.data.data;
            });
    }

    /**
     * Creates settings
     * @param setting
     * @returns Promise<Setting>
     */
    create(setting: Setting) {
        return this.client
            .post<JsonResponse<Setting>>(`1/settings`, setting)
            .then((response: AxiosResponse<JsonResponse<Setting>>) => {
                return response.data.data
            });
    }

    /**
     * Updates settings
     * @param setting
     * @returns Promise<Setting>
     */
    update(setting: Setting) {
        return this.client
            .patch<JsonResponse<Setting>>(`1/settings/${setting._id}`, setting)
            .then((response: AxiosResponse<JsonResponse<Setting>>) => {
                return response.data.data
            });
    }

    /**
     * Deletes settings
     * @param settingId
     * @returns Promise<Setting>
     */
    delete(settingId: Xuid<SupportedXuid.Setting>) {
        return this.client
            .delete<JsonResponse<Setting>>(`1/settings/${settingId}`)
            .then((response: AxiosResponse<JsonResponse<Setting>>) => {
                return response;
            });
    }
}

export default Settings;
