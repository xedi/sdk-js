import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Container from './Container/Container';
import Config from './Config/Config';
import * as Services from './Services/Services';
import AuthenticateHeader from './Utils/AuthenticateHeaderParser';

/**
 * Xedi
 */
class Xedi extends Container {
    /**
     * Boots the Container
     */
    protected boot(): void {
        super.boot();

        this.singleton('client', (app: Container, config: Config) => {
            const client: AxiosInstance = axios.create({
                baseURL: config.get('base_url', 'https://api.xedi.com/'),
                headers: {
                    "Accepts": 'application/json',
                    "Access-Control-Allow-Origin": '*',
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            });

            client.interceptors.request.use((value: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
                if (config.has('access_token')) {
                    value.headers.Authorization = `Bearer ${config.get('access_token')}`;
                }

                return value;
            });

            client.interceptors.response.use(
                (value: AxiosResponse<any>): AxiosResponse<any> | Promise<AxiosResponse<any>> => {
                    return value;
                },
                (error) => {
                    const response = error.response;
                    const is_client_error = /40[0,1]/.test(response.status.toString());

                    if (is_client_error && 'www-authenticate' in response.headers) {
                        const authenticate_header = AuthenticateHeader.parse(response.headers['www-authenticate']);
                        const requires_refresh = (authenticate_header.error_description || '').includes('token expired');

                        if (requires_refresh) {
                            this.resolve('config').delete('access_token');

                            return this.resolve('services.auth')
                                .refreshAccessToken()
                                .then(() => {
                                    const config = error.config;

                                    delete config.headers.Authorization;

                                    return client.request(config);
                                });
                        }

                        const requires_reauth = authenticate_header.error === 'invalid_token';
                        if (requires_reauth) {
                            this.resetInstance('services.auth');

                            return Promise.reject('Re-Authentication required');
                        }
                    }

                    return Promise.reject(error);
                }
            );

            return client;
        });

        this.singleton('services.auth', (app: Container, config: Config) => {
            return new Services.Auth(
                config,
                app.resolve('client')
            );
        });

        this.singleton('services.users', (app: Container, config: Config) => {
            return new Services.Users(
                config,
                app.resolve('client')
            );
        });

        this.singleton('services.businesses', (app: Container, config: Config) => {
            return new Services.Businesses(
                config,
                app.resolve('client')
            );
        });

        this.singleton('services.products', (app: Container, config: Config) => {
            return new Services.Products(
                config,
                app.resolve('client')
            );
        });

        this.singleton('services.mailboxes', (app: Container, config: Config) => {
            return new Services.Mailboxes(
                config,
                app.resolve('client')
            );
        });

        this.singleton('services.accounts', (app: Container, config: Config) => {
            return new Services.Accounts(
                config,
                app.resolve('client')
            );
        });
    }

    /**
     * Get an instance of the HttpClient
     */
    static get Client(): AxiosInstance {
        return this.resolveInstance()
            .resolve('client');
    }

    /**
     * Get an instance of the Auth API
     */
    static get Auth(): Services.Auth
    {
        return this.resolveInstance()
            .resolve('services.auth');
    }

    /**
     * Get an instance of the Users API
     */
    static get Users(): Services.Users
    {
        return this.resolveInstance()
            .resolve('services.users');
    }

    /**
     * Get an instance of the Businesses API
     */
    static get Businesses(): Services.Businesses
    {
        return this.resolveInstance()
            .resolve('services.businesses');
    }

    /**
     * Get an instance of the Products API
     */
    static get Products(): Services.Products
    {
        return this.resolveInstance()
            .resolve('services.products');
    }

    /**
     * Get an instance of the Mailboxes API
     */
    static get Mailboxes(): Services.Mailboxes
    {
        return this.resolveInstance()
            .resolve('services.mailboxes');
    }

    /**
     * Get an instance of the Accounts API
     */
    static get Accounts(): Services.Accounts
    {
        return this.resolveInstance()
            .resolve('services.accounts');
    }
}

export default Xedi;
