import {AxiosResponse} from 'axios';
import Service from './Service';
import Xuid, {SupportedXuid} from '../Utils/Xuid';
import JsonResponse from '../Interfaces/JsonResponse';
import {File} from '../Models/Models';
import PaginatedJsonResponse from '../Interfaces/PaginatedJsonResponse';

interface ListParams extends Object
{
  page: number;
  type: string;
  business_id: Xuid<SupportedXuid.Business>;
  user_id: Xuid<SupportedXuid.User>;
  network_connection_id: string;
  network_configuration_id: string;
}

/**
 * Files Api
 */
class Files extends Service
{
    /**
     * List all files
     * @param params
     * @param pageNumber
     * @returns Promise<file>
     */
    list(params: ListParams) {
        return this.client
        .get<PaginatedJsonResponse<File>>('1/files')
        .then((response: AxiosResponse<PaginatedJsonResponse<File>>) => {
            return response.data.data
        });
    }

    /**
     * Create file
     * @param file
     * @param params
     * @returns Promise<file>
     */
    create(file: File, params: object) {
        return this.client
            .post<JsonResponse<File>>(`1/files`, Object.assign(params, { file }))
            .then((response: AxiosResponse<JsonResponse<File>>) => {
                return response.data.data;
            });
    }

    /**
     * Gets files
     * @param fileId
     * @returns Promise<File>
     */
    get(fileId: Xuid<SupportedXuid.File>) {
        return this.client
            .get<JsonResponse<File>>(`1/files/${fileId}`)
            .then((response: AxiosResponse<JsonResponse<File>>) => {
                return response.data.data;
            });
    }

    /**
     * Deletes files
     * @param fileId
     * @returns Promise<File>
     */
    delete(fileId: Xuid<SupportedXuid.File>) {
        return this.client
            .delete<JsonResponse<File>>(`1/files/${fileId}`)
            .then((response: AxiosResponse<JsonResponse<File>>) => {
                return response;
            });
    }

}

export default Files;
