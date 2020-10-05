import { AxiosResponse } from 'axios';
import Service from  './Service';
import JsonResponse from '../Interfaces/JsonResponse';
import { Collection, Location } from '../Models/Models';
import Xuid, { SupportedXuid } from '../Utils/Xuid';
import PaginatedJsonResponse from '../Interfaces/PaginatedJsonResponse';

/**
 * Locations API
 */
class Locations extends Service
{
    list(params: object): Promise<PaginatedJsonResponse<Location>> {
        return this.client
            .get<PaginatedJsonResponse<Location>>('1/locations', {params} )
            .then((response: AxiosResponse<PaginatedJsonResponse<Location>>) => {
                return response.data;
        });
    }

    get(locationid: Xuid<SupportedXuid.Location>){
        return this.client
            .get<JsonResponse<Location>>(`1/locations/${locationid}`)
            .then((response: AxiosResponse<JsonResponse<Location>>) => {
                return response.data.data;
        });
    }

    create(location: Location) {
        return this.client
            .post<JsonResponse<Location>>(`1/locations`, location)
            .then((response: AxiosResponse<JsonResponse<Location>>) => {
                return response.data.data
            });
    }

    update(location: Location) {
        return this.client
            .patch<JsonResponse<Location>>(`1/locations/${location._id}`, location)
            .then((response: AxiosResponse<JsonResponse<Location>>) => {
                return response.data.data
            });
    }

    delete(locationid: Xuid<SupportedXuid.Location>) {
        return this.client
            .delete<JsonResponse<Location>>(`1/locations/${locationid}`)
            .then((response: AxiosResponse<JsonResponse<Location>>) => {
                return response;
            });
    }

    getByBusiness(businessid: Xuid<SupportedXuid.Business>, params: object): Promise<PaginatedJsonResponse<Location>> {
        return this.client
            .get<PaginatedJsonResponse<Location>>(`/1/businesses/${businessid}/locations`, {params})
            .then((response: AxiosResponse<PaginatedJsonResponse<Location>>) => {
                return response.data;
            });
    }
}

export default Locations;
