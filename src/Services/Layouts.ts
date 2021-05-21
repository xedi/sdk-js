import Service from './Service';
import Xuid, {SupportedXuid} from '../Utils/Xuid';
import JsonResponse from '../Interfaces/JsonResponse';
import {Layout} from '../Models/Models';
import {AxiosResponse} from 'axios';
import PaginatedJsonResponse from "../Interfaces/PaginatedJsonResponse";

/**
 * Layouts
 */
class Layouts extends Service {

    /**
     * List layouts
     * @param config
     * @returns Promise<PaginatedJsonResponse<Layout[]>>
     */
    list(config: object) {
        return this.client
            .get<PaginatedJsonResponse<Layout>>(`1/layouts`, config)
            .then((response: AxiosResponse<PaginatedJsonResponse<Layout>>) => {
                return response.data;
            });
    }

    /**
     * Gets document
     * @param layoutId
     * @param config
     * @returns Promise<Layout>
     */
    get(layoutId: Xuid<SupportedXuid.Layout>, config: object) {
        return this.client
            .get(`1/layouts/${layoutId}`, config)
            .then((response: AxiosResponse<JsonResponse<Layout>>) => {
                return response.data.data;
            });
    }

    /**
     * Creates document
     * @param layout
     * @returns Promise<Layout>
     */
    create(layout: Layout) {
        return this.client
            .post<JsonResponse<Layout>>(`1/layouts`, layout)
            .then((response: AxiosResponse<JsonResponse<Layout>>) => {
                return response.data.data
            });
    }

    /**
     * Updates document
     * @param layout
     * @returns Promise<Layout>
     */
    update(layout: Layout) {
        return this.client
            .patch<JsonResponse<Layout>>(`1/layouts/${layout._id}`, layout)
            .then((response: AxiosResponse<JsonResponse<Layout>>) => {
                return response.data.data
            });
    }

    /**
     * Updates document
     * @param layout
     * @returns Promise<Layout>
     */
    markAsRead(layout: Layout) {
        return this.client
            .put<JsonResponse<Layout>>(`1/layouts/${layout._id}/read`, layout)
            .then((response: AxiosResponse<JsonResponse<Layout>>) => {
                return response.data.data
            });
    }

    /**
     * Deletes layout
     * @param layoutId
     * @returns Promise<Layout>
     */
    delete(layoutId: Xuid<SupportedXuid.Layout>) {
        return this.client
            .delete<JsonResponse<Layout>>(`1/layouts/${layoutId}`)
            .then((response: AxiosResponse<JsonResponse<Layout>>) => {
                return response;
            });
    }
}

export default Layouts;
