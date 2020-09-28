import Xuid, {SupportedXuid} from "../Utils/Xuid";

/**
 * Document Group
 */
export default interface DocumentGroup extends Object {
    _id: Xuid<SupportedXuid.DocumentGroup>;
    business_id: Xuid<SupportedXuid.Business>;
    partnership_id: Xuid<SupportedXuid.Partnership>;
    documents: object;
}
