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
     * @param documentSetting
     * @returns Promise<DocumentSetting>
     */
    create(documentSetting: DocumentSetting) {
        return this.client
            .post<JsonResponse<DocumentSetting>>(`1/document-settings`, documentSetting)
            .then((response: AxiosResponse<JsonResponse<DocumentSetting>>) => {
                return response.data.data
            });
    }

    /**
     * Updates document setting
     * @param documentSetting
     * @returns Promise<DocumentSetting>
     */
    update(documentSetting: DocumentSetting) {
        return this.client
            .patch<JsonResponse<DocumentSetting>>(`1/document-settings/${documentSetting._id}`, documentSetting)
            .then((response: AxiosResponse<JsonResponse<DocumentSetting>>) => {
                return response.data.data
            });
    }

    /**
     * Deletes document setting
     * @param documentSettingId
     * @returns Promise<DocumentSetting>
     */
    delete(documentSettingId: Xuid<SupportedXuid.DocumentSetting>) {
        return this.client
            .delete<JsonResponse<DocumentSetting>>(`1/document-settings/${documentSettingId}`)
            .then((response: AxiosResponse<JsonResponse<DocumentSetting>>) => {
                return response;
            });
    }
}

export default DocumentSettings;
