
import Service from "./Service";
import JsonResponse from "../Interfaces/JsonResponse";
import { Collection } from "../Models/Models";
import Transition from "../Models/Transition";
import { AxiosResponse } from "axios";

class Transitions extends Service
{
    list() {
        return this.client
            .get<JsonResponse<Collection<Transition>>>(`1/transitions`)
            .then((response: AxiosResponse<JsonResponse<Collection<Transition>>>) => {
                return response.data.data;
            });
    }

}

export default Transitions;
