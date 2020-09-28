import {AxiosResponse} from 'axios';
import Service from './Service';
import Xuid, {SupportedXuid} from '../Utils/Xuid';
import JsonResponse from '../Interfaces/JsonResponse';
import {Event} from '../Models/Models';
import PaginatedJsonResponse from '../Interfaces/PaginatedJsonResponse';

/**
 * Events API
 */
class Events extends Service {
    /**
     * Lists all events
     *
     * @param [pageNumber]
     *
     * @returns Promise<PaginatedJsonResponse<Event[]>>
     */
    list(pageNumber: number = 1) {
        return this.client
            .get<PaginatedJsonResponse<Event>>('1/events', {params: {page: pageNumber}})
            .then((response: AxiosResponse<PaginatedJsonResponse<Event>>) => {
                return response.data;
            });
    }

    /**
     * Get an event by ID
     *
     * @param eventId
     *
     * @returns Event
     */
    get(eventId: Xuid<SupportedXuid.Event>) {
        return this.client
            .get<JsonResponse<Event>>(`1/events/${eventId}`)
            .then((response: AxiosResponse<JsonResponse<Event>>) => {
                return response.data.data;
            });
    }

    /**
     * Get Events for specific user
     *
     * @param userId
     * @param [pageNumber]
     *
     * @returns Promise<PaginatedJsonResponse<Event[]>>
     */
    getByUser(userId: Xuid<SupportedXuid.Event>, pageNumber: number = 1) {
        return this.client
            .get<PaginatedJsonResponse<Event>>(`1/users/${userId}/events`, {params: {page: pageNumber}})
            .then((response: AxiosResponse<PaginatedJsonResponse<Event>>) => {
                return response.data;
            });
    }

    /**
     * Get events for a specific business
     *
     * @param businessId
     * @param [pageNumber]
     *
     * @returns Promise<PaginatedJsonResponse<Event[]>>
     */
    getByBusiness(businessId: Xuid<SupportedXuid.Business>, pageNumber: number = 1) {
        return this.client
            .get<PaginatedJsonResponse<Event>>(`1/businesses/${businessId}/events`, {params: {page: pageNumber}})
            .then((response: AxiosResponse<PaginatedJsonResponse<Event>>) => {
                return response.data;
            });
    }

    /**
     * Gets Events by user for specific business
     *
     * @param businessId
     * @param userId
     * @param [pageNumber]
     *
     * @returns Promise<PaginatedJsonResponse<Event[]>>
     */
    getByUserForBusiness(businessId: Xuid<SupportedXuid.Business>, userId: Xuid<SupportedXuid.User>, pageNumber: number = 1) {
        return this.client
            .get<PaginatedJsonResponse<Event>>(`1/businesses/${businessId}/users/${userId}/events`, {params: {page: pageNumber}})
            .then((response: AxiosResponse<PaginatedJsonResponse<Event>>) => {
                return response.data;
            });
    }
}

export default Events;
