import JsonResponse from "../Interfaces/JsonResponse";
import {AxiosResponse} from "axios";
import Service from "./Service";
import NetworkConfiguration from "../Models/NetworkConfiguration";
import Xuid, {SupportedXuid} from "../Utils/Xuid";

/**
 * Network Configurations
 */
class NetworkConfigurations extends Service {

    /**
     * Creates Network configuration
     * @param networkConfiguration
     * @returns Promise<NetworkConfiguration>
     */
    create(networkConfiguration: NetworkConfiguration) {
        return this.client
            .post<JsonResponse<NetworkConfiguration>>(`1/networkconfigurations`, networkConfiguration)
            .then((response: AxiosResponse<JsonResponse<NetworkConfiguration>>) => {
                return response.data.data
            });
    }

    /**
     * Updates network configuration
     * @param networkConfiguration
     * @returns Promise<NetworkConfiguration>
     */
    update(networkConfiguration: NetworkConfiguration) {
        return this.client
            .patch<JsonResponse<NetworkConfiguration>>(`1/networkconfigurations/${networkConfiguration._id}`, networkConfiguration)
            .then((response: AxiosResponse<JsonResponse<NetworkConfiguration>>) => {
                return response.data.data
            });
    }

    /**
     * Deletes network configuration
     * @param configurationId
     * @returns Promise<NetworkConfiguration>
     */
    delete(configurationId: Xuid<SupportedXuid.NetworkConfiguration>) {
        return this.client
            .delete<JsonResponse<NetworkConfiguration>>(`1/networkconfigurations/${configurationId}`)
            .then((response: AxiosResponse<JsonResponse<NetworkConfiguration>>) => {
                return response;
            });
    }

    /**
     * FTP Connector
     * @param params
     */
    ftpConnect(params: Object) {
        return this.client
            .post<JsonResponse<NetworkConfiguration>>(`1/networkconfigurations/ftp`, params)
            .then((response: AxiosResponse<JsonResponse<NetworkConfiguration>>) => {
                return response.data.data;
            });
    }

    /**
     * SFTP Connector
     * @param params
     */
    sftpConnect(params: Object) {
        return this.client
            .post<JsonResponse<NetworkConfiguration>>(`1/networkconfigurations/sftp`, params)
            .then((response: AxiosResponse<JsonResponse<NetworkConfiguration>>) => {
                return response.data.data;
            });
    }
}

export default NetworkConfigurations;
