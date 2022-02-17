import {AxiosResponse} from 'axios';
import Service from './Service';
import JsonResponse from '../Interfaces/JsonResponse';
import {Group} from '../Models/Models';
import Xuid, {SupportedXuid} from '../Utils/Xuid';
import PaginatedJsonResponse from '../Interfaces/PaginatedJsonResponse';

/**
 * Groups API
 */
class Groups extends Service {
    /**
     * List all groups
     *
     * @returns Group[]
     */
    list(userId: Xuid<SupportedXuid.User>, params: object): Promise<PaginatedJsonResponse<Group>> {
        return this.client
            .get<PaginatedJsonResponse<Group>>('1/groups', params)
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
    get(groupid: Xuid<SupportedXuid.Group>) {
        return this.client
            .get<JsonResponse<Group>>(`1/groups/${groupid}`)
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
            .get<PaginatedJsonResponse<Group>>(`1/users/${userId}/groups`, {params})
            .then((response: AxiosResponse<PaginatedJsonResponse<Group>>) => {
                return response.data;
            });
    }

    /**
     * Add to a group
     *
     * @param userId
     * @param groupId
     * @param params
     *
     * @returns Promise<PaginatedJsonResponse<Group[]>>
     */
    addUserToGroup(userId: Xuid<SupportedXuid.User>, groupId: Xuid<SupportedXuid.Group>, params: object): Promise<PaginatedJsonResponse<Group>> {
        return this.client
            .put<PaginatedJsonResponse<Group>>(`1/groups/${groupId}/memberships/${userId}`, params)
            .then((response: AxiosResponse<PaginatedJsonResponse<Group>>) => {
                return response.data;
            });
    }

    /**
     * remove user from a group
     *
     * @param userId
     * @param groupId
     *
     * @returns Promise<PaginatedJsonResponse<Group[]>>
     */
    removeUserFromGroup(userId: Xuid<SupportedXuid.User>, groupId: Xuid<SupportedXuid.Group>): Promise<PaginatedJsonResponse<Group>> {
        return this.client
            .delete<PaginatedJsonResponse<Group>>(`1/groups/${groupId}/memberships/${userId}`)
            .then((response: AxiosResponse<PaginatedJsonResponse<Group>>) => {
                return response.data;
            });
    }
}

export default Groups;
