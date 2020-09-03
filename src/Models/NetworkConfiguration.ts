import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Network Configuration
 */
export default interface NetworkConfiguration extends Object {
    _id: Xuid<SupportedXuid.NetworkConfiguration>;
}
