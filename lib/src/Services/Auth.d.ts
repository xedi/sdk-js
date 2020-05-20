import { AxiosResponse } from 'axios';
import Service from './Service';
import { User, Business } from '../Models/Models';
import Xuid, { SupportedXuid } from '../Utils/Xuid';
import AuthResponse from '../Interfaces/AuthResponse';
/**
 * Auth
 */
declare class Auth extends Service {
    /**
     * Logged in User
     */
    private _user;
    /**
     * Current business context
     */
    private _business;
    /**
     * Logs the user out
     * @returns logout
     */
    logout(): Promise<AxiosResponse<any>>;
    /**
     * Login and obtain a token pair
     * @param email
     * @param password
     * @returns Object
     */
    login(email: String, password: String): Promise<AxiosResponse<AuthResponse>>;
    /**
     * Switches business context
     * @param business_uuid
     * @returns Object
     */
    switchContexts(business_uuid: Xuid<SupportedXuid.Business>): Promise<AxiosResponse<AuthResponse>>;
    /**
     * Gets the current user
     * @returns User|void
     */
    get user(): User | null | void;
    /**
     * Gets the current business context
     * @returns Business|void
     */
    get business(): Business | null | void;
}
export default Auth;
