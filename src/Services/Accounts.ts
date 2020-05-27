import Service from "./Service";
import JsonResponse from "../Interfaces/JsonResponse";
import User from "../Models/User";
import { AxiosResponse } from "axios";

type Email = String;

type RegistrationParameters = {
    email: Email;
    first_name: String;
    last_name: String;
    contact_no?: Number;
    job_title?: String;
    avatar?: URL;
    password: String;
};

/**
 * Accounts
 */
class Accounts extends Service
{
    /**
     * Registers an account
     *
     * @param {Object} account_details - Account Details
     * @param {string} account_details.email - The email for the Account
     * @param {string} account_details.first_name - The account holders given name
     * @param {string} account_details.last_name - The account holders family name
     * @param {string} account_details.password - The password for the account
     * @param {number} [account_details.contact_no] - The account holders contact number
     * @param {string} [account_details.job_title] - The account holders job title
     * @param {url} [account_details.avatar] - The account holders avatar
     *
     *
     * @returns Promise<User>
     */
    register(account_details: RegistrationParameters) {
        return this.client
            .post<JsonResponse<User>>('1/auth/accounts', account_details)
            .then((response: AxiosResponse<JsonResponse<User>>) => {
                return response.data.data;
            });
    }

    /**
     * Verifies account email addresses
     *
     * @param {string} verification_token
     *
     * @returns Promise<User>
     */
    verify(verification_token: String) {
        return this.client
            .post<JsonResponse<User>>('1/auth/verification', { token: verification_token })
            .then((response: AxiosResponse<JsonResponse<User>>) => {
                return response.data.data;
            });
    }
}

export default Accounts;
