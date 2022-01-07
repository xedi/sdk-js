import Xuid, { SupportedXuid } from "../Utils/Xuid";
import PipelineState from "../Enums/PipelineState";
/**
 * Pipeline
 */
export default interface Pipeline extends Object {
    '_id': Xuid<SupportedXuid.Pipeline>;
    'name': string,
    'stage_id': Xuid<SupportedXuid.Stage>;
    'state': PipelineState;
    'stop_on_failure': boolean
}
