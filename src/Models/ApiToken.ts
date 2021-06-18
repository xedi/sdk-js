import Xuid, { SupportedXuid } from '../Utils/Xuid';

/**
 * Api Token
 */
export default interface BusinessInvite extends Object {
    _id: string;
    business_id: Xuid<SupportedXuid.Business>;
    token: string;
    whitelist: string;
}
