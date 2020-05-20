import { User, Business } from "../Models/Models";
import JsonResponse from "./JsonResponse";
interface Payload extends Object {
    tokens: {
        access_token: String;
        refresh_token: String;
    };
    user: User;
    business?: Business;
}
/**
 * Auth response
 */
interface AuthResponse extends JsonResponse<Payload> {
}
export default AuthResponse;
