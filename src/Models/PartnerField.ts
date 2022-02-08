import Xuid, { SupportedXuid } from '../Utils/Xuid';

/**
 * Partnership
 */
export default interface PartnerField extends Object {
    _id: Xuid<SupportedXuid.PartnerField>;
    business_id: Xuid<SupportedXuid.Business>;
    field_id: string;
    required: boolean;
}
