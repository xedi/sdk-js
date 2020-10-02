import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Setting
 */
export default interface Setting extends Object {
    _id: Xuid<SupportedXuid.Setting>;
    context: string;
    setting: string;
    value: string;

}
