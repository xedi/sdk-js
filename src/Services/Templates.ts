import JsonResponse from "../Interfaces/JsonResponse";
import { Collection } from "../Models/Models";
import { AxiosResponse } from "axios";
import Service from "./Service";
import Template from "../Models/Template";
import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Tempaltes
 */
class Templates extends Service
{
    /**
     * Get all templates
     * @returns Promise<Template>
     */
    list()
    {
        return this.client
            .get<JsonResponse<Collection<Template>>>(`1/templates`)
            .then((response: AxiosResponse<JsonResponse<Collection<Template>>>) => {
                return response.data.data;
            });
    }

    /**
     * Gets tempaltes
     * @param templateId 
     * @returns Promise<Template>
     */
    get(templateId: Xuid<SupportedXuid.Template>) {
        return this.client
            .get<JsonResponse<Template>>(`1/templates${ templateId }`)
            .then((response: AxiosResponse<JsonResponse<Template>>) => {
                return response.data.data;
            });
    }
}

export default Templates;
