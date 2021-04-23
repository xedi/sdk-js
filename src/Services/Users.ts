import Service from './Service';
import {AxiosResponse} from 'axios';
import {Collection, Permission, User} from '../Models/Models';
import JsonResponse from '../Interfaces/JsonResponse';
import Xuid, {SupportedXuid} from '../Utils/Xuid';
import PaginatedJsonResponse from '../Interfaces/PaginatedJsonResponse';

class Users extends Service {

    /**
     * List all users
     */
    list() {
        return this.client
            .get<JsonResponse<Collection<User>>>('1/users')
            .then((resp: AxiosResponse<JsonResponse<Collection<User>>>) => {
                return resp.data.data;
            });
    }

    /**
     * Retrieve a user
     *
     * @param userUuid
     */
    get(userUuid: Xuid<SupportedXuid.User>) {
        return this.client
            .get<JsonResponse<User>>(`1/users/${userUuid}`)
            .then((response: AxiosResponse<JsonResponse<User>>) => {
                return response.data.data;
            });

    }

    /**
     * Update a user
     * @param user
     * @returns Promise<User>
     */
    update(user: User) {
        return this.client
            .put<JsonResponse<User>>(`1/users/${user._id}`, user)
            .then((response: AxiosResponse<JsonResponse<User>>) => {
                return response.data.data
            });
    }

    /**
     * Delete a user
     * @param user
     * @returns Promise<User>
     */
    delete(user: User) {
        return this.client
            .delete(`1/users/${user._id}`);
    }

    /**
     * Restore a user
     * @param user
     * @returns Promise<User>
     */
    restore(user: User) {
        return this.client
            .put(`1/users/${user._id}`);
    }

    /**
     * Retrieve a users permissions
     *
     * @param userUuid
     */
    getPermissions(userUuid: Xuid<SupportedXuid.User>) {
        return this.client
            .get<JsonResponse<Collection<Permission>>>(`1/users/${userUuid}/permissions`)
            .then((response: AxiosResponse<JsonResponse<Collection<Permission>>>) => {
                return response.data.data;
            });
    }

    getByGroup(groupID: Xuid<SupportedXuid.Group>, params: object): Promise<PaginatedJsonResponse<User>> {
        return this.client
            .get<PaginatedJsonResponse<User>>(`1/groups/${groupID}/users`, {params})
            .then((response: AxiosResponse<PaginatedJsonResponse<User>>) => {
                return response.data;
            });
    }

    /**
     * Gravatar check
     * @param emailMd5
     */
    gravatar(emailMd5: string): Promise<AxiosResponse> {
        return this.client
            .get(`1/gravatar/${emailMd5}`)
            .then((response: AxiosResponse) => {
                return response.data;
            });
    }
}

export default Users;
