import Service from "./Service";
import JsonResponse from "../Interfaces/JsonResponse";
import {AxiosResponse} from "axios";
import {Notification} from "../Models/Models";
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
     * @param notification
     * @returns Promise<Notification>
     */
    update(notification: Notification) {
        console.log(notification);
        return this.client
            .patch<JsonResponse<Notification>>(`1/notifications/${notification._id}`, notification)
            .then((response: AxiosResponse<JsonResponse<Notification>>) => {
                return response.data.data;
            });
    }
}

export default Notifications;
