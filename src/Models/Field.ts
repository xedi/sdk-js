import Xuid, {SupportedXuid} from "../Utils/Xuid";

export default interface Field extends Object {
    _id: Xuid<SupportedXuid.File>;
    field_name: string,
    free_text: string,
    field_id: string,
    type: string,
    mapping_id: string,
}
