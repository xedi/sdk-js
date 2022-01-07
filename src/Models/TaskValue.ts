import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Task Value
 */
export default interface TaskValue extends Object {
    '_id': Xuid<SupportedXuid.TaskValue>;
    'task_argument_id': Xuid<SupportedXuid.TaskArgument>;
    'value': string
}
