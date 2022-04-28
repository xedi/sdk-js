import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * UnleashedCustomer
 */
export default interface UnleashedCustomer extends Object {
    _id: Xuid<SupportedXuid.UnleashedCustomerMapping>;
    partnership_id: Xuid<SupportedXuid.Business>;
    business_id: Xuid<SupportedXuid.Business>;
    customer_id: string;
}
