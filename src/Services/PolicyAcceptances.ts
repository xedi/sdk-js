import Service from './Service';
import {AxiosResponse} from 'axios';
import {PolicyAcceptance} from '../Models/Models';
import JsonResponse from '../Interfaces/JsonResponse';


class PolicyAcceptances extends Service {

    /**
     * Create a Policy Acceptance
     * @param policyAcceptance
     * @returns Promise<Instance>
     */
    create(policyAcceptance: PolicyAcceptance) {
        return this.client
            .post<JsonResponse<PolicyAcceptance>>(`1/policies`, policyAcceptance)
            .then((response: AxiosResponse<JsonResponse<PolicyAcceptance>>) => {
                return response.data.data
            });
    }

    /**
     * Get a Policy Acceptance
     * @param contextId
     * @returns Promise<Instance>
     */
    get(contextId: string) {
        return this.client
            .get<JsonResponse<PolicyAcceptance>>('1/policies/' + contextId )
            .then((response: AxiosResponse<JsonResponse<PolicyAcceptance>>) => {
                return response.data.data;
            });
    }

    /**
     * Update a policy acceptance
     * @param policyAcceptance
     * @returns Promise<Instance>
     */
    update(policyAcceptance: PolicyAcceptance) {
        return this.client
            .put<JsonResponse<PolicyAcceptance>>('1/policies/' + policyAcceptance.context_id , policyAcceptance)
            .then((response: AxiosResponse<JsonResponse<PolicyAcceptance>>) => {
                return response.data.data
            });
    }

    /**
     * Delete a policy acceptance
     * @param contextId
     * @returns Promise<Instance>
     */
    delete(contextId: string) {
        return this.client
            .delete<JsonResponse<null>>('1/policies/' + contextId )
            .then((response: AxiosResponse<JsonResponse<null>>) => {
                return response.data.data;
            });
    }

    /**
     * Check a policy acceptance
     * @param contextId
     * @param policy
     * @returns Promise<Instance>
     */
    check(contextId: string, policy: string) {
        return this.client
            .get<JsonResponse<null>>('1/policies/' + contextId + '/check/' + policy)
            .then((response: AxiosResponse<JsonResponse<null>>) => {
                return response.data.data;
            });
    }
}

export default PolicyAcceptances;
