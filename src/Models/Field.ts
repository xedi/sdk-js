import Xuid, {SupportedXuid} from "../Utils/Xuid";

export default interface Field extends Object {
    _id: Xuid<SupportedXuid.File>;
    field_name: String,
    free_text: String,
    field_id: String,
    type: String,
    mapping_id: String,
}
