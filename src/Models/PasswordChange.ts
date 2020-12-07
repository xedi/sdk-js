/**
 * Password Change Change
 */
export default interface PasswordChange extends Object {
    current_password: string;
    password: string;
    password_confirmation: string;
}