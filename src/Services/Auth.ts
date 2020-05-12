import Service from './Service';
import { User, Business } from '../Models/Models';
import Xuid, { SupportedXuid } from '../Utils/Xuid';

/**
 * Auth
 */
class Auth extends Service
{
    /**
     * Logged in User
     */
    private _user: User;

    /**
     * Current business context
     */
    private _business: Business;

    /**
     * Logs the user out
     * @returns logout 
     */
    async logout(): Promise<Boolean> {
        return this.client
            .delete('1/auth/token')
            .catch((err: PromiseRejectionEvent) => false)
            .then((resp: Response) => true);
    }

    /**
     * Login and obtain a token pair
     * @param email 
     * @param password 
     * @returns Object 
     */
    async login(email: String, password: String): Promise<Object> {
        return this.client
            .post('1/auth', { email, password })
            .then((resp: Response) => {
                return resp.json();
            });
    }

    /**
     * Switches business context
     * @param business_uuid 
     * @returns Object
     */
    async switchContexts(business_uuid: Xuid<SupportedXuid.Business>): Promise<Object> {
        return this.client
            .patch('1/auth/token', { business_uuid })
            .then((resp: Response) => {
                return resp.json();
            });
    }

    /**
     * Gets the current user
     * @returns User|void
     */
    get user(): User | void {
        return this._user;
    }

    /**
     * Gets the current business context
     * @returns Business|void
     */
    get business(): Business | void {
        return this._business;
    }
}

export default Auth;