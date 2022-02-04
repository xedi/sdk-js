import Xuid, { SupportedXuid } from '../Utils/Xuid';

/**
 * Partnership Field
 */
export default interface PartnershipField extends Object {
    _id: Xuid<SupportedXuid.PartnershipField>;
    partnership_id: Xuid<SupportedXuid.Partnership>;
    field_id: string;
    value: string;
}
