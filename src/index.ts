import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import Container from './Container/Container';
import Config from './Config/Config';
import * as Services from './Services/Services';
import AuthenticateHeader from './Utils/AuthenticateHeaderParser';
import ContainerInterface from './Interfaces/Container';
import GraphQlClient from './Utils/GraphQlClient';

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

            config.on('base_url.updated', (value) => {
                client.defaults.baseURL = value;
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

                        const requiresClaim = authenticateHeader.error === 'Challenge is required';
                        if (requiresClaim) {
                            return new Promise(
                                (resolve, reject) => {
                                    this.resolve('services.auth')
                                        .once(
                                            'claim_granted',
                                            () => {
                                                const request = error.config;

                                                delete request.headers.Authorization;

                                                client.request(request)
                                                    .then(resolve);
                                             }
                                        )
                                        .trigger(
                                            'claim_required',
                                            {
                                                claim: authenticateHeader.claim,
                                                process: (password: string) => {
                                                    this.resolve('services.auth')
                                                        .requestClaim(authenticateHeader.claim!, password);
                                                }
                                            }
                                        );
                                }
                            );
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

        this.singleton('services.notifications', (app: ContainerInterface, config: Config) => {
            return new Services.Notifications(
                config,
                app.resolve('client')
            );
        });

        this.singleton('services.partners', (app: ContainerInterface, config: Config) => {
            return new Services.Partners(
                config,
                app.resolve('client')
            );
        });

        this.singleton('services.partnerships', (app: ContainerInterface, config: Config) => {
            return new Services.Partnerships(
                config,
                app.resolve('client')
            );
        });

        this.singleton('services.doc-types', (app: ContainerInterface, config: Config) => {
            return new Services.DocTypes(
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

        this.singleton('services.templates', (app: ContainerInterface, config: Config) => {
            return new Services.Templates(
                config,
                app.resolve('client')
            );
        });

        this.singleton('services.transitions', (app: ContainerInterface, config: Config) => {
            return new Services.Transitions(
                config,
                app.resolve('client')
            );
        });

        this.singleton('services.instances', (app: ContainerInterface, config: Config) => {
            return new Services.Instances(

                config,
                app.resolve('client')
            );
        });

        this.singleton('services.stages', (app: ContainerInterface, config: Config) => {
            return new Services.Stages(
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

        this.singleton('services.events', (app: ContainerInterface, config: Config) => {
            return new Services.Events(
                config,
                app.resolve('client')
            );
        });

        this.singleton('services.network-connections', (app: ContainerInterface, config: Config) => {
            return new Services.NetworkConnections(
                config,
                app.resolve('client')
            );
        });

        this.singleton('services.events', (app: ContainerInterface, config: Config) => {
            return new Services.Events(
                config,
                app.resolve('client')
            );
        });

        this.singleton('services.billing', (app: ContainerInterface, config: Config) => {
            return new Services.Billing(
                this
            );
        });

        this.singleton('utilities.graphql', (app: ContainerInterface, config: Config) => {
            return new GraphQlClient(
                config,
                app.resolve('client')
            );
        });

        this.singleton('services.groups', (app: ContainerInterface, config: Config) => {
            return new Services.Groups(
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
    static get Auth(): Services.Auth {
        return this.resolveInstance()
            .resolve('services.auth');
    }

    /**
     * Get an instance of the Users API
     */
    static get Users(): Services.Users {
        return this.resolveInstance()
            .resolve('services.users');
    }

    /**
     * Get an instance of the Businesses API
     */
    static get Businesses(): Services.Businesses {
        return this.resolveInstance()
            .resolve('services.businesses');
    }

    /**
     * Get an instance of the Partners API
     */
    static get Partners(): Services.Partners {
        return this.resolveInstance()
            .resolve('services.partners');
    }

    /**
     * Get an instance of the DocTypes API
     */
    static get DocTypes(): Services.DocTypes
    {
        return this.resolveInstance()
            .resolve('services.doc-types');
    }

    /**
     * Get an instance of the Events API
     */
    static get Events(): Services.Events
    {
        return this.resolveInstance()
            .resolve('services.events');
    }

    /**
     * Get an instance of the Partnerships API
     */
    static get Partnerships(): Services.Partnerships
    {
        return this.resolveInstance()
            .resolve('services.partnerships');
    }

    /**
     * Get an instance of the Prices API
     */
    static get Prices(): Services.Prices {
        return this.resolveInstance()
            .resolve('services.prices');
    }

    /**
     * Get an instance of the Products API
     */
    static get Products(): Services.Products {
        return this.resolveInstance()
            .resolve('services.products');
    }

    /**
     * Get an instance of the Mailboxes API
     */
    static get Mailboxes(): Services.Mailboxes {
        return this.resolveInstance()
            .resolve('services.mailboxes');
    }

    /**
     * Get an instance of the Notifications API
     */
    static get Notifications(): Services.Notifications {
        return this.resolveInstance()
            .resolve('services.notifications');
    }

    /**
     * Get an instance of the Accounts API
     */
    static get Accounts(): Services.Accounts {
        return this.resolveInstance()
            .resolve('services.accounts');
    }

    /**
     * Get an instance of Templates API
     */
    static get Templates(): Services.Templates
    {
        return this.resolveInstance()
            .resolve('services.templates');
    }

    /**
     * Get an instance of Transitoins API
     */
    static get Transitions(): Services.Transitions
    {
        return this.resolveInstance()
            .resolve('services.transitions');

    }

    /**
     * Get an instance of Instances API
     */
    static get Instances(): Services.Instances
    {
        return this.resolveInstance()
            .resolve('services.instances');

    }

    /**
     * Get an instance of Stages API
     */
    static get Stages(): Services.Stages
    {
        return this.resolveInstance()
            .resolve('services.Stages');
    }

    /**
     * Get an instance of the Tax Rates API
     */
    static get TaxRates(): Services.TaxRates {
        return this.resolveInstance()
            .resolve('services.tax-rates');
    }

    static get Billing(): Services.Billing {
        return this.resolveInstance()
            .resolve('services.billing');
    }

    /**
     * Get an instance of the Network Connections API
     */
    static get NetworkConnections(): Services.NetworkConnections {
        return this.resolveInstance()
            .resolve('services.network-connections');
    }

    /**
     * Get an instance of the GraphQL Client
     */
    static get GraphQL(): GraphQlClient
    {
        return this.resolveInstance()
            .resolve('utilities.graphql');
    }

    static get Groups(): Services.Groups
    {
        return this.resolveInstance()
            .resolve('services.groups');
    }
}

export default Xedi;
