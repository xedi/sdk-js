import Xuid, { SupportedXuid } from '../Utils/Xuid';

/**
 * DocType
 */
export default interface DocType extends Object {
    _id: Xuid<SupportedXuid.DocType>;
    type: string;
    message_types: object;
}
