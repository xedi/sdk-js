import { User, Business } from "../Models/Models";
import JsonResponse from "./JsonResponse";

interface Payload extends Object {
    tokens: {
        access: string;
        refresh: string;
    };
    user: User;
    business?: Business;
};
/**
 * Auth response
 */
interface AuthResponse extends JsonResponse<Payload> {}

export default AuthResponse;
