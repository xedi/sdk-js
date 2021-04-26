import JsonResponse from "../Interfaces/JsonResponse";
import {AxiosResponse} from "axios";
import Service from "./Service";
import NetworkConnection from "../Models/NetworkConnection";
import Xuid, {SupportedXuid} from "../Utils/Xuid";
import PaginatedJsonResponse from "../Interfaces/PaginatedJsonResponse";

/**
 * NetworkConnections
 */
class NetworkConnections extends Service {
    /**
     * Lists all network connections
     *
     * @param [pageNumber]
     *
     * @returns Promise<PaginatedJsonResponse<NetworkConnection[]>>
     */
    list(pageNumber: number = 1) {
        return this.client
            .get<PaginatedJsonResponse<NetworkConnection>>('1/network-connections', {params: {page: pageNumber}})
            .then((response: AxiosResponse<PaginatedJsonResponse<NetworkConnection>>) => {
                return response.data;
            });
    }

    /**
     * Gets Network connections
     * @param connectionId
     * @returns Promise<NetworkConnection>
     */
    get(connectionId: Xuid<SupportedXuid.NetworkConnection>) {
        return this.client
            .get<JsonResponse<NetworkConnection>>(`1/network-connections/${connectionId}`)
            .then((response: AxiosResponse<JsonResponse<NetworkConnection>>) => {
                return response.data.data;
            });
    }

    /**
     * Creates Network connection
     * @param networkConnection
     * @returns Promise<NetworkConnection>
     */
    create(networkConnection: NetworkConnection) {
        return this.client
            .post<JsonResponse<NetworkConnection>>(`1/network-connections`, networkConnection)
            .then((response: AxiosResponse<JsonResponse<NetworkConnection>>) => {
                return response.data.data
            });
    }

    /**
     * Updates network connection
     * @param connectionId
     * @param networkConnection
     * @returns Promise<NetworkConnection>
     */
    update(connectionId: Xuid<SupportedXuid.NetworkConnection>, networkConnection: NetworkConnection) {
        return this.client
            .patch<JsonResponse<NetworkConnection>>(`1/network-connections/${connectionId}`, networkConnection)
            .then((response: AxiosResponse<JsonResponse<NetworkConnection>>) => {
                return response.data.data
            });
    }

    /**
     * Deletes network connection
     * @param connectionId
     * @returns Promise<NetworkConnection>
     */
    delete(connectionId: Xuid<SupportedXuid.NetworkConnection>) {
        return this.client
            .delete<JsonResponse<NetworkConnection>>(`1/network-connections/${connectionId}`)
            .then((response: AxiosResponse<JsonResponse<NetworkConnection>>) => {
                return response;
            });
    }
}

export default NetworkConnections;
