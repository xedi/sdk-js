import Xuid, {SupportedXuid} from '../Utils/Xuid';

/**
 * DocType
 */
export default interface DocumentType extends Object {
    _id: Xuid<SupportedXuid.DocType>;
    type: string;
    message_types: {
        tradacoms?: string[];
        edifact?: string[];
        x12?: string[];
    };
}
