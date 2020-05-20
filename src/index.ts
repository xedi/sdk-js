import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import Container from './Container/Container';
import Config from './Config/Config';
import * as Services from './Services/Services';

/**
 * Xedi
 */
class Xedi extends Container {
    /**
     * Boots the Container
     */
    protected boot(): void {
        super.boot();

        this.singleton('client', function(app: Container, config: Config) {
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
}

export default Xedi;
