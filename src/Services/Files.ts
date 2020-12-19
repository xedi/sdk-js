import {AxiosResponse} from 'axios';
import Service from './Service';
import Xuid, {SupportedXuid} from '../Utils/Xuid';
import JsonResponse from '../Interfaces/JsonResponse';
import {File} from '../Models/Models';
import PaginatedJsonResponse from '../Interfaces/PaginatedJsonResponse';

/**
 * Files Api
 */
class Files extends Service
{

    /**
     * List all files
     * @param pageNumber
     * @returns Promise<file>
     */
    list(pageNumber: number = 1) {
        return this.client
        .get<PaginatedJsonResponse<File>>('1/files')
        .then((response: AxiosResponse<PaginatedJsonResponse<File>>) => {
            return response.data.data
        });
    }

    /**
     * Create file
     * @param file
     * @returns Promise<file>
     */
    create(file: File) {
        return this.client
            .post<JsonResponse<File>>(`1/filees`, file)
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
