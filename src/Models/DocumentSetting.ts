import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Document Settings
 */
export default interface DocumentSetting extends Object {
    _id: Xuid<SupportedXuid.NetworkConnection>;
    partnership_id:Xuid<SupportedXuid.Partnership>;
    document_type_id:Xuid<SupportedXuid.DocumentType>;
    mapping_id:Xuid<SupportedXuid.Mapping>;
    connection_id:Xuid<SupportedXuid.NetworkConnection>;
    generation_number:number;
    edi_data_mode:string;
}
