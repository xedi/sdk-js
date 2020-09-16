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
            .post<JsonResponse<DocumentSetting>>(`1/documentsettings`, documentSetting)
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
            .delete<JsonResponse<DocumentSetting>>(`1/documentsettings/${documentSettingId}`)
            .then((response: AxiosResponse<JsonResponse<DocumentSetting>>) => {
                return response;
            });
    }
}

export default DocumentSettings;
