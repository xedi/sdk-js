import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Trade Invite
 */
export default interface TradeInvite extends Object {
    '_id': Xuid<SupportedXuid.TradeInvite>;
    'email': string;
    'name': string;
    'business_id': Xuid<SupportedXuid.Business>;
    'invited_by': Xuid<SupportedXuid.User>;
    'status': string;
    'token': string;
}