import Service from "./Service";
import JsonResponse from "../Interfaces/JsonResponse";
import User from "../Models/User";
import {AxiosResponse} from "axios";

type Email = string;

type RegistrationParameters = {
    email: Email;
    first_name: string;
    last_name: string;
    contact_no?: number;
    job_title?: string;
    avatar?: URL;
    password: string;
};

/**
 * Accounts
 */
class Accounts extends Service {
    /**
     * Registers an account
     *
     * @param {Object} accountDetails - Account Details
     * @param {string} accountDetails.email - The email for the Account
     * @param {string} accountDetails.first_name - The account holders given name
     * @param {string} accountDetails.last_name - The account holders family name
     * @param {string} accountDetails.password - The password for the account
     * @param {number} [accountDetails.contact_no] - The account holders contact number
     * @param {string} [accountDetails.job_title] - The account holders job title
     * @param {url} [accountDetails.avatar] - The account holders avatar
     *
     *
     * @returns Promise<User>
     */
    register(accountDetails: RegistrationParameters) {
        return this.client
            .post<JsonResponse<User>>('1/auth/accounts', accountDetails)
            .then((response: AxiosResponse<JsonResponse<User>>) => {
                return response.data.data;
            });
    }

    /**
     * Verifies account email addresses
     *
     * @param {string} verificationToken
     *
     * @returns Promise<User>
     */
    verify(verificationToken: string) {
        return this.client
            .get<JsonResponse<User>>('1/auth/' + verificationToken + '/verify')
            .then((response: AxiosResponse<JsonResponse<User>>) => {
                return response.data.data;
            });
    }
}

export default Accounts;
