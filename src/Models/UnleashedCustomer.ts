import Xuid, {SupportedXuid} from '../Utils/Xuid';

/**
 * UnleashedCustomer
 */
export default interface UnleashedCustomer extends Object {
    _id: Xuid<SupportedXuid.UnleashedCustomer>;
    customer_name: string;
    business_id: Xuid<SupportedXuid.Business>;
    customer_id: string;
}
