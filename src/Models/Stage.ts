import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Transition
 */
export default interface Stage extends Object {
    '_id': Xuid<SupportedXuid.Stage>;
    'name':string;
    'workflow_id': string;
    'document_type_id':string;
    'state':string;
}
