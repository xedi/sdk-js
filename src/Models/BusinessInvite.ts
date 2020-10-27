import Xuid, { SupportedXuid } from '../Utils/Xuid';

/**
 * BusinessInvite
 */
export default interface BusinessInvite extends Object {
    _id: Xuid<SupportedXuid.BusinessInvite>;
    email: string;
    business_id: Xuid<SupportedXuid.Business>;
    invited_by: Xuid<SupportedXuid.User>;
}
