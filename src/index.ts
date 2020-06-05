import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Container from './Container/Container';
import Config from './Config/Config';
import * as Services from './Services/Services';
import AuthenticateHeader from './Utils/AuthenticateHeaderParser';
import ContainerInterface from './Interfaces/Container';

/**
 * Xedi
 */
class Xedi extends Container {
    /**
     * Boots the Container
     */
    protected boot(): void {
        super.boot();

        this.singleton('client', (app: ContainerInterface, config: Config) => {
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
                    const isClientError = /40[0,1]/.test(response.status.toString());

                    if (isClientError && 'www-authenticate' in response.headers) {
                        const authenticateHeader = AuthenticateHeader.parse(response.headers['www-authenticate']);
                        const requiresRefresh = (authenticateHeader.error_description || '').includes('token expired');

                        if (requiresRefresh) {
                            this.resolve('config').delete('access_token');

                            return this.resolve('services.auth')
                                .refreshAccessToken()
                                .then(() => {
                                    const request = error.config;

                                    delete request.headers.Authorization;

                                    return client.request(request);
                                });
                        }

                        const requiresReauth = authenticateHeader.error === 'invalid_token';
                        if (requiresReauth) {
                            this.resetInstance('services.auth');

                            return Promise.reject('Re-Authentication required');
                        }
                    }

                    return Promise.reject(error);
                }
            );

            return client;
        });

        this.singleton('services.auth', (app: ContainerInterface, config: Config) => {
            return new Services.Auth(
                config,
                app.resolve('client')
            );
        });

        this.singleton('services.users', (app: ContainerInterface, config: Config) => {
            return new Services.Users(
                config,
                app.resolve('client')
            );
        });

        this.singleton('services.businesses', (app: ContainerInterface, config: Config) => {
            return new Services.Businesses(
                config,
                app.resolve('client')
            );
        });

        this.singleton('services.prices', (app: ContainerInterface, config: Config) => {
            return new Services.Prices(
                config,
                app.resolve('client')
            );
        });

        this.singleton('services.products', (app: ContainerInterface, config: Config) => {
            return new Services.Products(
                config,
                app.resolve('client')
            );
        });

        this.singleton('services.mailboxes', (app: ContainerInterface, config: Config) => {
            return new Services.Mailboxes(
                config,
                app.resolve('client')
            );
        });

        this.singleton('services.accounts', (app: ContainerInterface, config: Config) => {
            return new Services.Accounts(
                config,
                app.resolve('client')
            );
        });

        this.singleton('services.tax-rates', (app: ContainerInterface, config: Config) => {
            return new Services.TaxRates(
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
     * Get an instance of the Prices API
     */
    static get Prices(): Services.Prices
    {
        return this.resolveInstance()
            .resolve('services.prices');
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

    /**
     * Get an instance of the Tax Rates API
     */
    static get TaxRates(): Services.TaxRates
    {
        return this.resolveInstance()
            .resolve('services.tax-rates');
    }
}

export default Xedi;
