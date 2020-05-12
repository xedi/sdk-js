import Container, { Config } from './Container';

declare type Xuid<SupportedXuid> = String;
enum SupportedXuid {
    Business,
    User
};

declare interface User extends Object {
    _id: Xuid<SupportedXuid.User>;
    first_name: String;
    last_name: String;
    email: String;
    contact_no: Number;
    job_title: String;
    avatar: String;
    is_active: Boolean;
};
declare interface Business extends Object {
    _id: Xuid<SupportedXuid.Business>;
    business_name: String;
    address_1: String;
    address_2: String;
    address_3: String;
    address_4: String;
    post_code: String;
    vat_code: String;
    invoice_name: String;
    country_code: String;
    contact_name: String;
    contact_email: String;
    contact_no: Number;
    website: String;
    logo: String;
    requires_gln: Boolean;
    slug: String;
    external: Boolean;
    public: Boolean;
}
declare type Models = User | Business;
declare type Collection<T = Models> = Array<T | Models>;

declare class Client {
    constructor(...configurations: String[]);
};

declare class Service {
    constructor(config: Object, client: Client);
}

declare class Auth extends Service {
    logout(): PromiseConstructor;
    login(email: String, password: String): PromiseConstructor;
    switchContexts(business_uuid: Xuid<SupportedXuid.Business>): PromiseConstructor;
    user?: User;
    business?: Business;
};

declare class Users {
    list(): Promise<Collection<User>>;
    get(user_id: Xuid<SupportedXuid.User>): Promise<User>;
    update(user_id: Xuid<SupportedXuid.User>, attributes: object): Promise<User>;
    delete(user_id: Xuid<SupportedXuid.User>): Promise<Boolean>;
}

declare class Businesses {
    list(): Promise<Collection<Business>>;
    get(business_id: Xuid<SupportedXuid.Business>): Promise<Business>;
    update(business_id: Xuid<SupportedXuid.Business>, attributes: object): Promise<Business>;
    delete(business_id: Xuid<SupportedXuid.Business>): Promise<Boolean>;
}

export default class Xedi extends Container {
    protected boot(): void {
        super.boot();

        this.singleton('client', function(app: Container, config: Config) {
            return new Client(...config.get('auth'));
        });

        this.singleton('services.auth', (app: Container, config: Config) => {
            return new Auth(
                config.get('services.auth'),
                app.resolve('client')
            );
        });
    }

    static get Client(): Client {
        return this.resolveInstance()
            .resolve('client');
    }

    static get Auth(): Auth
    {
        return this.resolveInstance()
            .resolve('services.auth');
    }
}