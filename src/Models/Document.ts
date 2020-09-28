import Xuid, {SupportedXuid} from "../Utils/Xuid";

/**
 * Document
 */
export default interface Document extends Object {
    _id: Xuid<SupportedXuid.Document>;
    meta: object;
    data: object;
}
