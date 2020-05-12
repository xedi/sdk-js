import Service from './Service';
import { User, Business } from '../Models/Models';
import Xuid, { SupportedXuid } from '../Utils/Xuid';

declare interface AuthResponse extends Object
{
    tokens: Object;
    user: Object;
    business?: Object;
}

declare class Auth extends Service {
    logout(): Promise<Boolean>;
    login(email: String, password: String): Promise<AuthResponse>;
    switchContexts(business_uuid: Xuid<SupportedXuid.Business>): Promise<AuthResponse>;
    user?: User;
    business?: Business;
}

export default Auth;