import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Transition
 */
export default interface Transition extends Object {
    _id: Xuid<SupportedXuid.Transition>;
    from_id: string;
    to_id?: string;
    workflow_id: string;
    workflow_type: string;
    description?: string;
    is_automatic: boolean;
}
