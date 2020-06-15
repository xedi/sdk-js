import Service from './Service';
import {AxiosResponse} from 'axios';
import {Collection, User} from '../Models/Models';
import JsonResponse from '../Interfaces/JsonResponse';
import Xuid, {SupportedXuid} from '../Utils/Xuid';

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
            .patch<JsonResponse<User>>(`1/users/${user._id}`, user)
            .then((response: AxiosResponse<JsonResponse<User>>) => {
                return response.data.data
            });
    }
}

export default Users;
