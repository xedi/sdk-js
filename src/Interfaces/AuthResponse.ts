import { User, Business } from "../Models/Models";
import JsonResponse from "./JsonResponse";
/**
 * Auth response
 */
interface AuthResponse extends JsonResponse {
    data: {
        tokens: {
            access_token: String;
            refresh_token: String;
        };
        user: User;
        business?: Business;
    }
}

export default AuthResponse;