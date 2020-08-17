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

    /**
     * Gets by user
     *
     * @param userId
     * @param params
     *
     * @returns Promise<PaginatedJsonResponse<Group[]>>
     */
    getByUser(userId: Xuid<SupportedXuid.User>, params: object): Promise<PaginatedJsonResponse<Group>> {
        return this.client
            .get<PaginatedJsonResponse<Group>>(`1/users/${ userId }/groups`, {params})
            .then((response: AxiosResponse<PaginatedJsonResponse<Group>>) => {
                return response.data;
            });
    }
}

export default Groups;