import Service from "./Service";
import JsonResponse from "../Interfaces/JsonResponse";
import {Collection} from "../Models/Models";
import Transition from "../Models/Transition";
import {AxiosResponse} from "axios";
import Xuid, {SupportedXuid} from "../Utils/Xuid";

class Transitions extends Service {
    list() {
        return this.client
            .get<JsonResponse<Collection<Transition>>>(`1/transitions`)
            .then((response: AxiosResponse<JsonResponse<Collection<Transition>>>) => {
                return response.data.data;
            });
    }

    get(transitionId: Xuid<SupportedXuid.Transition>) {
        return this.client
            .get<JsonResponse<Transition>>(`1/transitions/${transitionId}`)
            .then((response: AxiosResponse<JsonResponse<Transition>>) => {
                return response.data.data
            });
    }

    create(transition: Transition) {
        return this.client
            .post<JsonResponse<Transition>>(`1/transitions`, transition)
            .then((response: AxiosResponse<JsonResponse<Transition>>) => {
                return response.data.data
            });
    }

    update(transitionId: Xuid<SupportedXuid.Transition>, transition: Transition) {
        return this.client
            .patch<JsonResponse<Transition>>(`1/transitions/${transitionId}`, transition)
            .then((response: AxiosResponse<JsonResponse<Transition>>) => {
                return response.data.data;
            });
    }

    delete(transitionId: Xuid<SupportedXuid.Transition>) {
        return this.client
            .delete<JsonResponse<Transition>>(`1/transitions/${transitionId}`)
            .then((response: AxiosResponse<JsonResponse<Transition>>) => {
                return response;
            });
    }

}

export default Transitions;
