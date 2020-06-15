import Xuid, { SupportedXuid } from "../Utils/Xuid";
import State from "../Enums/State";
import WorkflowType from "../Enums/WorkflowType";

/**
 * Transition
 */
export default interface Stage extends Object {
    '_id': Xuid<SupportedXuid.Stage>;
    'name': string;
    'workflow_id': Xuid<SupportedXuid.Instance|SupportedXuid.Template>;
    'document_type_id': Xuid<SupportedXuid.DocumentType>;
    'workflow_type': WorkflowType;
    'state': State;
}
