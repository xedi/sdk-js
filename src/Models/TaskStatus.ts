import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Task Status
 */
export default interface TaskStatus extends Object {
    '_id': Xuid<SupportedXuid.TaskStatus>;
    'partnership_id': Xuid<SupportedXuid.Partnership>;
    'task_id': Xuid<SupportedXuid.Task>;
    'active': boolean;
    'visible': boolean;
}
