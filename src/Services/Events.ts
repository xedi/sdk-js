import {AxiosResponse} from 'axios';
import Service from './Service';
import Xuid, { SupportedXuid } from '../Utils/Xuid';
import JsonResponse from '../Interfaces/JsonResponse';
import { Collection, Event } from '../Models/Models';

class Events extends Service
{
    list() {
        return this.client
            .get<JsonResponse<Collection<Event>>>('1/events')
            .then((response: AxiosResponse<JsonResponse<Collection<Event>>>) => {
                return response.data.data;
            });
    }

    get(eventId: Xuid<SupportedXuid.Event>) {
        return this.client
            .get<JsonResponse<Event>>(`1/events/${eventId}`)
            .then((response: AxiosResponse<JsonResponse<Event>>) => {
                return response.data.data;
            });
    }
}

export default Events;
