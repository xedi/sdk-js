import { AxiosResponse } from 'axios';
import Service from  './Service';
import JsonResponse from '../Interfaces/JsonResponse';
import { Collection, Group } from '../Models/Models';
import Xuid, { SupportedXuid } from '../Utils/Xuid';

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
    list() {
        return this.client
            .get<JsonResponse<Collection<Group>>>(`1/groups`)
            .then((response: AxiosResponse<JsonResponse<Collection<Group>>>) => {
                return response.data.data;
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