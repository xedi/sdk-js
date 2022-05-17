import Xuid, {SupportedXuid} from '../Utils/Xuid';

/**
 * UnleashedCustomer
 */
export default interface ScheduledJob extends Object {
    _id: Xuid<SupportedXuid.ScheduledJob>;
    business_id: Xuid<SupportedXuid.Business>;
    frequency: string;
    day: number;
    time: number;
    next_run_time: number;
    is_active: boolean;
}
