import Xuid, {SupportedXuid} from "../Utils/Xuid";

/**
 * Batch
 */
export default interface Batch extends Object {
    _id: Xuid<SupportedXuid.Batch>;
    partnership_id:Xuid<SupportedXuid.Partnership>;
    document_type_id:Xuid<SupportedXuid.DocumentType>;
    status: string;
    generation_number: string;
    snrf: string;
}
