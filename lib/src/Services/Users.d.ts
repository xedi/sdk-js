import Service from './Service';
import { Collection, User } from '../Models/Models';
import Xuid, { SupportedXuid } from '../Utils/Xuid';
declare class Users extends Service {
    list(): Promise<Collection<User>>;
    get(user_uuid: Xuid<SupportedXuid.User>): Promise<User>;
}
export default Users;
