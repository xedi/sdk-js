import Service from "./Service";
import JsonResponse from "../Interfaces/JsonResponse";
import {AxiosResponse} from "axios";
import Xuid, {SupportedXuid} from "../Utils/Xuid";
import PaginatedJsonResponse from "../Interfaces/PaginatedJsonResponse";

/**
 * Notifications Service
 */
class Notifications extends Service {

    /**
     * Lists notifications
     * @param params
     * @returns Promise<PaginatedJsonResponse<Notification[]>>
     */
    list(params: object) {
        return this.client
            .get<PaginatedJsonResponse<Notification>>(`1/notifications`, {params})
            .then((response: AxiosResponse<PaginatedJsonResponse<Notification>>) => {
                return response.data;
            });
    }

    /**
     * Get notification
     * @param notificationId
     * @returns Promise<Notification>
     */
    get(notificationId: Xuid<SupportedXuid.Notification>) {
        return this.client
            .get<JsonResponse<Notification>>(`1/notifications/${notificationId}`)
            .then((response: AxiosResponse<JsonResponse<Notification>>) => {
                return response.data.data;
            });
    }
}

export default Notifications;
