import { User, Business } from "../Models/Models";
import JsonResponse from "./JsonResponse";

interface Payload extends Object {
    tokens: {
        access: String;
        refresh: String;
    };
    user: User;
    business?: Business;
};
/**
 * Auth response
 */
interface AuthResponse extends JsonResponse<Payload> {}

export default AuthResponse;
