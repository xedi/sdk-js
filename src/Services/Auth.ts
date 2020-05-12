import Service from './Service';
import { User, Business } from '../Models/Models';
import Xuid, { SupportedXuid } from '../Utils/Xuid';
import AuthResponse from '../Interfaces/AuthResponse';
import HttpResponse from '../Interfaces/HttpResponse';

/**
 * Auth
 */
class Auth extends Service
{
    /**
     * Logged in User
     */
    private _user: User | null | void = undefined;

    /**
     * Current business context
     */
    private _business: Business | null | void = undefined;

    /**
     * Logs the user out
     * @returns logout 
     */
    async logout(): Promise<HttpResponse<boolean>> {
        return this.client
            .delete<boolean>('1/auth/token')
            .then((resp: HttpResponse<boolean>) => {
                this._user = null;
                this._business = null;
                [ 'access_token', 'refresh_token' ].forEach(this.config.delete);

                return resp;
            });
    }

    /**
     * Login and obtain a token pair
     * @param email 
     * @param password 
     * @returns Object 
     */
    async login(email: String, password: String): Promise<HttpResponse<AuthResponse>> {
        return this.client
            .post<AuthResponse>('1/auth', { email, password })
            .then((resp: HttpResponse<AuthResponse>) => {
                if (resp.parsedBody !== null) {
                    this._user = (resp.parsedBody?.user as User);
                    this.config.set('access_token', resp.parsedBody?.tokens.access_token);
                    this.config.set('refresh_token', resp.parsedBody?.tokens.refresh_token);
                }
                
                return resp;
            });
    }

    /**
     * Switches business context
     * @param business_uuid 
     * @returns Object
     */
    async switchContexts(business_uuid: Xuid<SupportedXuid.Business>): Promise<HttpResponse<AuthResponse>> {
        return this.client
            .patch<AuthResponse>('1/auth/token', { business_uuid })
            .then((resp: HttpResponse<AuthResponse>) => {
                if (resp.parsedBody !== null) {
                    this._user = (resp.parsedBody?.user as User);
                    this._business = (resp.parsedBody?.business as Business);
                }
                
                return resp;
            });
    }

    /**
     * Gets the current user
     * @returns User|void
     */
    get user(): User | null | void {
        return this._user;
    }

    /**
     * Gets the current business context
     * @returns Business|void
     */
    get business(): Business | null | void {
        return this._business;
    }
}

export default Auth;