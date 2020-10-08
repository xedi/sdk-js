import Service from './Service';
import {AxiosResponse} from 'axios';
import {PolicyAcceptance} from '../Models/Models';
import JsonResponse from '../Interfaces/JsonResponse';


class PolicyAcceptances extends Service {

    /**
     * Create a Policy Acceptance
     * @param policyacceptance
     * @returns Promise<Instance>
     */
    create(policy_acceptance: PolicyAcceptance) {
        return this.client
            .post<JsonResponse<PolicyAcceptance>>(`1/policies`, policy_acceptance)
            .then((response: AxiosResponse<JsonResponse<PolicyAcceptance>>) => {
                return response.data.data
            });
    }

    /**
     * Get a Policy Acceptance
     * @param context_id
     * @returns Promise<Instance>
     */
    get(context_id: string) {
        return this.client
            .get<JsonResponse<PolicyAcceptance>>('1/policies/' + context_id )
            .then((response: AxiosResponse<JsonResponse<PolicyAcceptance>>) => {
                return response.data.data;
            });
    }

    /**
     * Update a policy acceptance
     * @param policy_acceptance
     * @returns Promise<Instance>
     */
    update(policy_acceptance: PolicyAcceptance) {
        return this.client
            .put<JsonResponse<PolicyAcceptance>>('1/policies/' + policy_acceptance.context_id , policy_acceptance)
            .then((response: AxiosResponse<JsonResponse<PolicyAcceptance>>) => {
                return response.data.data
            });
    }

    /**
     * Delete a policy acceptance
     * @param context_id
     * @returns Promise<Instance>
     */
    delete(context_id: string) {
        return this.client
            .delete<JsonResponse<null>>('1/policies/' + context_id )
            .then((response: AxiosResponse<JsonResponse<null>>) => {
                return response.data.data;
            });
    }

    /**
     * Check a policy acceptance
     * @param context_id
     * @param policy
     * @returns Promise<Instance>
     */
    check(context_id: string, policy: string) {
        return this.client
            .get<JsonResponse<null>>('1/policies/' + context_id + '/check/' + policy)
            .then((response: AxiosResponse<JsonResponse<null>>) => {
                return response.data.data;
            });
    }
}

export default PolicyAcceptances;
