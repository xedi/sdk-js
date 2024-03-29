import Service from './Service';
import {AxiosResponse} from 'axios';
import PaginatedJsonResponse from "../Interfaces/PaginatedJsonResponse";
import Schema from "../Models/Schema";

/**
 * Schemas
 */
class Schemas extends Service {

    /**
     * Parse a sample file and return in schema format
     *
     * @param params
     * @returns Promise<PaginatedJsonResponse<Field[]>>
     */
    parse(params: object) {
        return this.client
            .post<PaginatedJsonResponse<Schema>>(`1/schemas/parse`, params)
            .then((response: AxiosResponse<PaginatedJsonResponse<Schema>>) => {
                return response.data;
            });
    }

    /**
     * Resolve file type
     * @param params
     */
    resolve(params: object) {
        return this.client
            .post<PaginatedJsonResponse<Schema>>(`1/schemas/resolve`, params)
            .then((response: AxiosResponse<PaginatedJsonResponse<Schema>>) => {
                return response.data;
            });
    }
}

export default Schemas;
