import Service from "./Service";
import JsonResponse from "../Interfaces/JsonResponse";
import ApiToken from "../Models/ApiToken";
import {AxiosResponse} from "axios";


/**
 * Accounts
 */
class ApiTokens extends Service {

    /**
     * Generate a new token
     */
    generate() {
        return this.client
            .post<JsonResponse<ApiToken>>('1/tokens', {})
            .then((response: AxiosResponse<JsonResponse<ApiToken>>) => {
                return response.data.data;
            });
    }

    /**
     * Show a token
     */
    show() {
        return this.client
            .get<JsonResponse<ApiToken>>('1/tokens', {})
            .then((response: AxiosResponse<JsonResponse<ApiToken>>) => {
                return response.data.data;
            });
    }

    /**
     * Delete a token
     */
    delete(tokenId:string) {
        return this.client
            .delete<JsonResponse<null>>('1/tokens/' + tokenId, {})
            .then((response: AxiosResponse<JsonResponse<null>>) => {
                return response;
            });
    }

}

export default ApiTokens;
