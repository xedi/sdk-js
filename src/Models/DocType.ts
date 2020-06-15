import Xuid, { SupportedXuid } from '../Utils/Xuid';

/**
 * Business
 */
export default interface Business extends Object {
    _id: Xuid<SupportedXuid.DocType>;
    type: string;
    message_types: object;
}
