import Service from "./Service";
import JsonResponse from "../Interfaces/JsonResponse";
import {Mapping} from "../Models/Models";
import {AxiosResponse} from "axios";
import Xuid, {SupportedXuid} from "../Utils/Xuid";
import PaginatedJsonResponse from "../Interfaces/PaginatedJsonResponse";

/**
 * Mappings Service
 */
class Mappings extends Service {

    /**
     * Lists mappings
     * @param params
     * @returns Promise<PaginatedJsonResponse<Mailbox[]>>
     */
    list(params: object) {
        return this.client
            .get<PaginatedJsonResponse<Mapping>>(`1/mappings`, {params})
            .then((response: AxiosResponse<PaginatedJsonResponse<Mapping>>) => {
                return response.data;
            });
    }

    /**
     * Gets Mapping
     * @param mappingId
     * @returns Promise<Mailbox>
     */
    get(mappingId: Xuid<SupportedXuid.Mapping>) {
        return this.client
            .get<JsonResponse<Mapping>>(`1/mappings/${mappingId}`)
            .then((response: AxiosResponse<JsonResponse<Mapping>>) => {
                return response.data.data;
            });
    }
}

export default Mappings;
