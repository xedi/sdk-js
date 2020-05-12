import Service from './Service';
import { User, Business } from '../Models/Models';
import Xuid, { SupportedXuid } from '../Utils/Xuid';

declare class Auth extends Service {
    logout(): PromiseConstructor;
    login(email: String, password: String): PromiseConstructor;
    switchContexts(business_uuid: Xuid<SupportedXuid.Business>): PromiseConstructor;
    user?: User;
    business?: Business;
}

export default Auth;