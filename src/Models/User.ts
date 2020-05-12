import Xuid, { SupportedXuid } from '../Utils/Xuid';

/**
 * Userß
 */
export default interface User extends Object {
    _id: Xuid<SupportedXuid.User>;
    first_name: String;
    last_name: String;
    email: String;
    contact_no: Number;
    job_title: String;
    avatar: String;
    is_active: Boolean;
}