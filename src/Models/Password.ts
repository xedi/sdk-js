import Xuid, { SupportedXuid } from "../Utils/Xuid";
/**
 * Password
 */
export default interface Password extends Object {
    user_id: Xuid<SupportedXuid.User>;
    current_password: string;
    password: string;
    password_confirmation: string;
}
