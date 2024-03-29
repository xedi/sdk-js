import {AxiosResponse} from 'axios';
import Service from './Service';
import JsonResponse from '../Interfaces/JsonResponse';
import PaginatedJsonResponse from '../Interfaces/PaginatedJsonResponse';
import {Location} from '../Models/Models';
import Xuid, {SupportedXuid} from '../Utils/Xuid';

/**
 * Locations
 */
class Locations extends Service {

    /**
     * List Locations
     *
     * @param locationId
     *
     * @returns Promise<JsonResponse<Location[]>>
     */
    list(params: object) {
        return this.client
            .get<PaginatedJsonResponse<Location[]>>(`1/locations`, params)
            .then((response: AxiosResponse<PaginatedJsonResponse<Location[]>>) => {
                return response.data;
        });
}

    /**
     * List Locations for a business
     *
     * @param businessId
     *
     * @returns Promise<JsonResponse<Location[]>>
     */
    getForBusiness(businessId: Xuid<SupportedXuid.Business>) {
        return this.client
            .get<PaginatedJsonResponse<Location[]>>(`1/locations/business/${businessId}`)
            .then((response: AxiosResponse<PaginatedJsonResponse<Location[]>>) => {
                return response.data;
            });
}

    /**
     * Get a location by ID
     *
     * @param locationId
     *
     * @returns Promise<JsonResponse<Location>>
     */
     get(locationId: Xuid<SupportedXuid.Location>) {
        return this.client
            .get<JsonResponse<Location>>(`1/locations/${locationId}`)
            .then((response: AxiosResponse<JsonResponse<Location>>) => {
                return response.data;
            });
    }

    /**
     * Create a location
     *
     * @param location
     *
     * @returns Promise<JsonResponse<Location>>
     */
    create(location: Location) {
        return this.client
            .post<JsonResponse<Location>>('1/locations', location)
            .then((response: AxiosResponse<JsonResponse<Location>>) => {
                return response.data;
            });
    }

    /**
     * Update a location
     *
     * @param location
     *
     * @returns Promise<JsonResponse<Location>>
     */
     update(location: Location) {
        return this.client
            .patch<JsonResponse<Location>>('1/locations/' + location._id, location)
            .then((response: AxiosResponse<JsonResponse<Location>>) => {
                return response.data;
            });
    }

    /**
     * Delete a location by ID
     *
     * @param locationId
     *
     * @returns Promise<JsonResponse<Location>>
     */
    delete(locationId: Xuid<SupportedXuid.Location>) {
       return this.client
           .delete<JsonResponse<Location>>(`1/locations/${locationId}`)
           .then((response: AxiosResponse<JsonResponse<Location>>) => {
               return response.data;
           });
   }

    /**
     * Search
     *
     * @param params
     *
     * @returns Promise<JsonResponse<Location>>
     */
    search(params: object) {
        return this.client
            .get<JsonResponse<Location>>(`1/locations/search`, params)
            .then((response: AxiosResponse<JsonResponse<Location>>) => {
                return response.data;
            });
    }
}

export default Locations;
