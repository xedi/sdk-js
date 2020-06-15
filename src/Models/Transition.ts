import Xuid, { SupportedXuid } from "../Utils/Xuid";
import WorkflowType from "../Enums/WorkflowType";

/**
 * Transition
 */
export default interface Transition extends Object {
    _id: Xuid<SupportedXuid.Transition>;
    from_id: Xuid<SupportedXuid.Stage>;
    to_id?: Xuid<SupportedXuid.Stage>;
    workflow_id: Xuid<SupportedXuid.Instance>;
    workflow_type: WorkflowType;
    description?: string;
    is_automatic: boolean;
}
