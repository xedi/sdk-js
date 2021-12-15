import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Task Argument
 */
export default interface TaskArgument extends Object {
    '_id': Xuid<SupportedXuid.TaskArgument>;
    'attached_to': Xuid<SupportedXuid.Stage>;
    'value': string
}
