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
    list() {
        return this.client
            .get<JsonResponse<Collection<Template>>>(`1/templates`)
            .then((response: AxiosResponse<JsonResponse<Collection<Template>>>) => {
                return response.data.data;
            });
    }

    /**
     * Gets templates
     * @param templateId
     * @returns Promise<Template>
     */
    get(templateId: Xuid<SupportedXuid.Template>) {
        return this.client
            .get<JsonResponse<Template>>(`1/templates/${ templateId }`)
            .then((response: AxiosResponse<JsonResponse<Template>>) => {
                return response.data.data;
            });
    }

    /**
     * Creates templates
     * @param template
     * @returns Promise<Template>
     */
    create(template: Template) {
        return this.client
            .post<JsonResponse<Template>>(`1/templates`, template)
            .then((response: AxiosResponse<JsonResponse<Template>>) => {
                return response.data.data
            });
    }

    /**
     * Updates templates
     * @param template
     * @returns Promise<Template>
     */
    update(templateId: Xuid<SupportedXuid.Template>, template: Template) {
        return this.client
            .patch<JsonResponse<Template>>(`1/templates/${ templateId }`, template)
            .then((response: AxiosResponse<JsonResponse<Template>>) => {
                return response.data.data
            });
    }

    /**
     * Deletes templates
     * @param templateId
     * @returns Promise<Template>
     */
    delete(templateId: Xuid<SupportedXuid.Template>) {
        return this.client
            .delete<JsonResponse<Template>>(`1/templates/${ templateId }`)
            .then((response: AxiosResponse<JsonResponse<Template>>) => {
                return response;
            });
    }

    /**
     * Restore an Template
     * @param TemplateId
     * @returns Promise<Template>
     */
    restore(TemplateId: Xuid<SupportedXuid.Template>) {
        return this.client
            .put<JsonResponse<Template>>(`1/templates/${ TemplateId }`)
            .then((response: AxiosResponse<JsonResponse<Template>>) => {
                return response.data.data
            });
    };

    /**
     * Get all  trashed Templates
     * @returns Promise<Template>
     */
    showTrashed() {
        return this.client
            .get<JsonResponse<Collection<Template>>>(`1/templates/trashed`)
            .then((response: AxiosResponse<JsonResponse<Collection<Template>>>) => {
                return response.data.data;
            });
    }
}

export default Templates;
