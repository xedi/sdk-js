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
     * @param config
     * @returns Promise<PaginatedJsonResponse<Notification[]>>
     */
    list(config: object) {
        return this.client
            .get<PaginatedJsonResponse<Notification>>(`1/notifications`, config)
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
        return this.client
            .patch<JsonResponse<Notification>>(`1/notifications/${notification._id}`, notification)
            .then((response: AxiosResponse<JsonResponse<Notification>>) => {
                return response.data.data;
            });
    }

    /**
     * Delete notification
     * @param notification_id
     * @returns Promise
     */
    delete(notificationId: string) {
        return this.client
            .delete<JsonResponse<null>>(`1/notifications/` + notificationId)
            .then((response: AxiosResponse<JsonResponse<null>>) => {
                return response.data.data;
            })
    }
}

export default Notifications;
