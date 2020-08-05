import { AxiosResponse } from 'axios';
import Service from  './Service';
import JsonResponse from '../Interfaces/JsonResponse';
import { Collection, Group } from '../Models/Models';
import Xuid, { SupportedXuid } from '../Utils/Xuid';
import PaginatedJsonResponse from '../Interfaces/PaginatedJsonResponse';

/**
 * Groups API
 */
class Groups extends Service
{
    /**
     * List all groups
     *
     * @returns Group[]
     */
    list(pageNumber: number = 1) {
        return this.client
            .get<PaginatedJsonResponse<Group>>('1/groups', { params: { page: pageNumber } })
            .then((response: AxiosResponse<PaginatedJsonResponse<Group>>) => {
                return response.data;
        });
    }

    /**
     * Get a group by ID
     *
     * @param groupid
     *
     * @returns Group
     */
    get(groupid: Xuid<SupportedXuid.Group>){
        return this.client
            .get<JsonResponse<Group>>(`1/groups/${ groupid }`)
            .then((response: AxiosResponse<JsonResponse<Group>>) => {
                return response.data.data;
        });
    }
}

export default Groups;