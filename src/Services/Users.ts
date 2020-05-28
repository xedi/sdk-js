import Service from './Service';
import { AxiosResponse } from 'axios';
import { Collection, User } from '../Models/Models';
import JsonResponse from '../Interfaces/JsonResponse';
import Xuid, { SupportedXuid } from '../Utils/Xuid';

class Users extends Service
{
    list() {
        return this.client
            .get<JsonResponse<Collection<User>>>('1/users')
            .then((resp: AxiosResponse<JsonResponse<Collection<User>>>) => {
                return resp.data.data;
            });
    }

    get(userUuid: Xuid<SupportedXuid.User>) {
        return this.client
            .get<JsonResponse<User>>(`1/users/${ userUuid }`)
            .then((response: AxiosResponse<JsonResponse<User>>) => {
                return response.data.data;
            });

    }
}

export default Users;
