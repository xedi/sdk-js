import {Business} from "./Models";
import Xuid, {SupportedXuid} from '../Utils/Xuid';

/**
 * Partner
 */
export default interface Partner extends Business {
    _id: Xuid<SupportedXuid.Partner>
}
