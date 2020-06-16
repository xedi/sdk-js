import Xuid, { SupportedXuid } from '../Utils/Xuid';

/**
 * Partnership
 */
export default interface Partnership extends Object {
    _id: Xuid<SupportedXuid.Partnership>;
    sender_id: Xuid<SupportedXuid.Business>;
    receiver_id: Xuid<SupportedXuid.Business>;
    supplier_code: string;
    workflow_id: Xuid<SupportedXuid.Template>;
}
