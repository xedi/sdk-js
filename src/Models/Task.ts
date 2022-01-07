import Xuid, { SupportedXuid } from "../Utils/Xuid";
import TaskType from "../Enums/TaskType";

/**
 * Task
 */
export default interface Task extends Object {
    '_id': Xuid<SupportedXuid.Task>;
    'pipeline_id': Xuid<SupportedXuid.Pipeline>;
    'type': TaskType;
    'operation': string
}
