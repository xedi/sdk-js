import Service from "../Service";
import JsonResponse from "../../Interfaces/JsonResponse";
import {AxiosResponse} from "axios";
import Usage from "../../Models/Usage";

class Usages extends Service
{

    list() {
        return this.client
            .get<JsonResponse<Usage>>('1/billing/usages')
            .then((response: AxiosResponse<JsonResponse<Usage>>) => {
                return response.data.data;
            });
    }
}

export default Usages;
