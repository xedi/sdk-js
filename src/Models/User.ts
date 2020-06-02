import Xuid, { SupportedXuid } from '../Utils/Xuid';

/**
 * User
 */
export default interface User extends Object {
    _id: Xuid<SupportedXuid.User>;
    first_name: string;
    last_name: string;
    email: string;
    contact_no?: number;
    job_title?: string;
    avatar?: string;
    is_active: boolean;
}
