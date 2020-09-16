import Service from './Service';
import {DocumentSetting} from "../Models/Models";
import JsonResponse from "../Interfaces/JsonResponse";
import {AxiosResponse} from "axios";
import Xuid, {SupportedXuid} from "../Utils/Xuid";

/**
 * Document Settings
 */
class DocumentSettings extends Service {

    /**
     * Creates document setting
     * @param document_setting
     * @returns Promise<DocumentSetting>
     */
    create(document_setting: DocumentSetting) {
        return this.client
            .post<JsonResponse<DocumentSetting>>(`1/documentsettings`, document_setting)
            .then((response: AxiosResponse<JsonResponse<DocumentSetting>>) => {
                return response.data.data
            });
    }

    /**
     * Deletes document setting
     * @param document_setting_id
     * @returns Promise<DocumentSetting>
     */
    delete(document_setting_id: Xuid<SupportedXuid.DocumentSetting>) {
        return this.client
            .delete<JsonResponse<DocumentSetting>>(`1/documentsettings/${document_setting_id}`)
            .then((response: AxiosResponse<JsonResponse<DocumentSetting>>) => {
                return response;
            });
    }
}

export default DocumentSettings;
