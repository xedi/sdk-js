import Service from './Service';
import { Collection, Business } from '../Models/Models';
import Xuid, { SupportedXuid } from '../Utils/Xuid';

declare class Businesses extends Service {
    list(): Promise<Collection<Business>>;
    get(business_id: Xuid<SupportedXuid.Business>): Promise<Business>;
    update(business_id: Xuid<SupportedXuid.Business>, attributes: object): Promise<Business>;
    delete(business_id: Xuid<SupportedXuid.Business>): Promise<Boolean>;
}

export default Businesses;