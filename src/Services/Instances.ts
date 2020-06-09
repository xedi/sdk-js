import JsonResponse from "../Interfaces/JsonResponse";
import { Collection } from "../Models/Models";
import { AxiosResponse } from "axios";
import Service from "./Service";
import Instance from "../Models/Instance";
import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Instances
 */
class Instances extends Service
{
    /**
     * Get all Instances
     * @returns Promise<Instance>
     */
    list() {
        return this.client
            .get<JsonResponse<Collection<Instance>>>(`1/instances`)
            .then((response: AxiosResponse<JsonResponse<Collection<Instance>>>) => {
                return response.data.data;
            });
    }

    /**
     * Get Instance
     * @param instanceId
     * @returns Promise<Instance>
     */
    get(instanceId: Xuid<SupportedXuid.Template>) {
        return this.client
            .get<JsonResponse<Instance>>(`1/instances/${ instanceId }`)
            .then((response: AxiosResponse<JsonResponse<Instance>>) => {
                return response.data.data;
            });
    }

    /**
     * Create an Instance
     * @param instance
     * @returns Promise<Instance>
     */
    create(instance: Instance) {
        return this.client
            .post<JsonResponse<Instance>>(`1/instances`, instance)
            .then((response: AxiosResponse<JsonResponse<Instance>>) => {
                return response.data.data
            });
    }


    /**
     * Delete an Instance
     * @param instanceId
     * @returns Promise<Instance>
     */
    delete(instanceId: Xuid<SupportedXuid.Instance>) {
        return this.client
            .delete<JsonResponse<Instance>>(`1/instances/${ instanceId }`)
            .then((response: AxiosResponse<JsonResponse<Instance>>) => {
                return response;
            });
    }
}

export default Instances;
