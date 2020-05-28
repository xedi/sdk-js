import { AxiosResponse } from 'axios';
import Service from './Service';
import { User, Business } from '../Models/Models';
import Xuid, { SupportedXuid } from '../Utils/Xuid';
import AuthResponse from '../Interfaces/AuthResponse';

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

    boot(): Service {
        [ 'auth_updated', 'auth_deleted' ].forEach(event => {
            this.registerEvent(event);
        });

        return Service.prototype.boot.call(this);
    }

    /**
     * Logs the user out
     * @returns logout
     */
    logout() {
        return this.client
            .delete(
                '1/auth/token',
                {
                    params: {
                        refresh_token: this.config.get('refresh_token')
                    }
                }
            )
            .then(resp => {
                this._user = null;
                this._business = null;
                [ 'access_token', 'refresh_token' ].forEach(this.config.delete.bind(this.config));

                this.trigger('auth_deleted', { method: 'logout' });

                return resp;
            });
    }

    /**
     * Login and obtain a token pair
     * @param email
     * @param password
     * @returns Object
     */
    login(email: string, password: string) {
        return this.client
            .post<AuthResponse>('1/auth', { email, password })
            .then((resp: AxiosResponse<AuthResponse>) => {
                const body = resp.data;

                this._user = (body.data.user as User);
                this.config.set('access_token', body.data.tokens.access);
                this.config.set('refresh_token', body.data.tokens.refresh);

                this.trigger('auth_updated', {
                    method: 'login',
                    data: {
                        user: body.data.user,
                        refresh_token: body.data.tokens.refresh,
                        access_token: body.data.tokens.access,
                    }
                });

                return resp;
            });
    }

    /**
     * Authenticate using a refresh token
     *
     * @param {string} refreshToken - The provided refresh token
     *
     * @returns Promise<AuthResponse>
     */
    withToken(refreshToken: string) {
        this.config.set('refresh_token', refreshToken);

        return this.refreshAccessToken();
    }

    /**
     * Refreshs access token
     * @returns Object
     */
    refreshAccessToken() {
        const refreshToken = this.config.get('refresh_token');

        return this.client
            .post<AuthResponse>('1/auth/token', { 'refresh_token' : refreshToken })
            .then((resp: AxiosResponse<AuthResponse>) => {
                const body = resp.data;

                this._user = (body.data.user as User);
                this._business = (body.data.business as Business);
                this.config.set('access_token', body.data.tokens.access);
                this.config.set('refresh_token', body.data.tokens.refresh);

                this.trigger('auth_updated', {
                    method: 'refresh',
                    data: {
                        user: body.data.user,
                        business: body.data.business,
                        refresh_token: body.data.tokens.refresh,
                        access_token: body.data.tokens.access,
                    }
                });

                return resp;
            });
    }

    /**
     * Switches business context
     * @param businessUuid
     * @returns Object
     */
    switchContexts(businessUuid: Xuid<SupportedXuid.Business>) {
        return this.client
            .patch<AuthResponse>('1/auth/token', { 'business_uuid': businessUuid })
            .then((resp: AxiosResponse<AuthResponse>) => {
                const body = resp.data;

                this._user = (body.data.user as User);
                this._business = (body.data.business as Business);
                this.config.set('access_token', body.data.tokens.access);
                this.config.set('refresh_token', body.data.tokens.refresh);

                this.trigger('auth_updated', {
                    method: 'switch_context',
                    data: {
                        user: body.data.user,
                        business: body.data.business,
                        refresh_token: body.data.tokens.refresh,
                        access_token: body.data.tokens.access,
                    }
                });

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
