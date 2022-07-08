import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Task Value
 */
export default interface TaskValue extends Object {
    '_id': Xuid<SupportedXuid.TaskValue>;
    'task_argument_id': Xuid<SupportedXuid.TaskArgument>;
    'pipeline_id': Xuid<SupportedXuid.Pipeline>;
    'partnership_id': Xuid<SupportedXuid.Partnership>;
    'value': string
}
