import Container from './Container/Container';
import Config from './Config/Config';
import Client from './Client/Client';
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
            return new Client(config);
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
    static get Client(): Client {
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