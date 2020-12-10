import Service from './Service';
import JsonResponse from '../Interfaces/JsonResponse';
import {File} from '../Models/Models';
import {AxiosResponse} from 'axios';
import PaginatedJsonResponse from "../Interfaces/PaginatedJsonResponse";

/**
 * Files
 */
class Files extends Service {





    //WIP
    //Todo: confirm params for disk selection functionality





    /**
     * List files
     * @param params
     * @returns Promise<PaginatedJsonResponse<File[]>>
     */
    list(params: object) {
        return this.client
            .get<PaginatedJsonResponse<File>>(`1/file`, {params})
            .then((response: AxiosResponse<PaginatedJsonResponse<File>>) => {
                return response.data;
            });
    }

    /**
     * Gets file
     * @param path
     * @returns Promise<File>
     */
    get(path: string) {
        return this.client
            .get<JsonResponse<File>>(`1/files/${path}`)
            .then((response: AxiosResponse<JsonResponse<File>>) => {
                return response.data.data;
            });
    }

    /**
     * Upload file
     * @param file
     * @returns Promise<File>
     */
    create(file: File) {
        return this.client
            .post<JsonResponse<File>>(`1/files`, file)
            .then((response: AxiosResponse<JsonResponse<File>>) => {
                return response.data.data
            });
    }

    /**
     * Deletes file
     * @param path
     * @returns Promise<File>
     */
    delete(path: string) {
        return this.client
            .delete<JsonResponse<File>>(`1/files/${path}`)
            .then((response: AxiosResponse<JsonResponse<File>>) => {
                return response;
            });
    }
}

export default Files;
