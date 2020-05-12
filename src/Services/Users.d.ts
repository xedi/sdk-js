import Service from './Service';
import { Collection, User } from '../Models/Models';
import Xuid, { SupportedXuid } from '../Utils/Xuid';

declare class Users extends Service {
    list(): Promise<Collection<User>>;
    get(user_id: Xuid<SupportedXuid.User>): Promise<User>;
    update(user_id: Xuid<SupportedXuid.User>, attributes: object): Promise<User>;
    delete(user_id: Xuid<SupportedXuid.User>): Promise<Boolean>;
}

export default Users;