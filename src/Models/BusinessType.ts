import Xuid, {SupportedXuid} from '../Utils/Xuid';

/**
 * BusinessType
 */
export default interface BusinessType extends Object {
    _id: Xuid<SupportedXuid.BusinessType>;
    name: string;
}
