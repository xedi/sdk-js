import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Transition
 */
export default interface Stage extends Object {
    _id: Xuid<SupportedXuid.Stage>;
    from_id: string;
    to_id?: string;
    workflow_id: string;
    workflow_type: string;
    description?: string;
    is_automatic: boolean;
}
