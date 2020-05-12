import Container from './Container/Container';
import Config from './Config/Config';
import Client from './Client/Client';
import * as Services from './Services/Services';

class Xedi extends Container {
    protected boot(): void {
        super.boot();

        this.singleton('client', function(app: Container, config: Config) {
            return new Client(...config.get('auth'));
        });

        this.singleton('services.auth', (app: Container, config: Config) => {
            return new Services.Auth(
                config.get('services.auth'),
                app.resolve('client')
            );
        });

        this.singleton('services.users', (app: Container, config: Config) => {
            return new Services.Users(
                config.get('services.users'),
                app.resolve('client')
            );
        });

        this.singleton('services.businesses', (app: Container, config: Config) => {
            return new Services.Businesses(
                config.get('services.businesses'),
                app.resolve('client')
            );
        });
    }

    static get Client(): Client {
        return this.resolveInstance()
            .resolve('client');
    }

    static get Auth(): Services.Auth
    {
        return this.resolveInstance()
            .resolve('services.auth');
    }

    static get Users(): Services.Users
    {
        return this.resolveInstance()
            .resolve('services.users');
    }

    static get Businesses(): Services.Businesses
    {
        return this.resolveInstance()
            .resolve('services.businesses');
    }
}

export default Xedi;