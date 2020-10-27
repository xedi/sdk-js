import {AxiosResponse} from 'axios';
import Service from './Service';
import JsonResponse from '../Interfaces/JsonResponse';
import PaginatedJsonResponse from '../Interfaces/PaginatedJsonResponse';
import {BusinessInvite} from '../Models/Models';
import Xuid, {SupportedXuid} from '../Utils/Xuid';

/**
 * Businesses
 */
class BusinessInvites extends Service {

    /**
     * Create a business invite
     *
     * @param invite
     *
     * @returns Promise<JsonResponse<BusinessInvite[]>>
     */
    create(invite: BusinessInvite) {
        return this.client
            .post<JsonResponse<BusinessInvite>>('1/businessinvites', invite)
            .then((response: AxiosResponse<JsonResponse<BusinessInvite>>) => {
                return response.data.data;
            });
    }

    /**
     * Get business invites allocated to the authed user
     *
     * @returns Promise<PaginatedJsonResponse<BusinessInvite[]>>
     */
    mine() {
        return this.client
             .get<PaginatedJsonResponse<BusinessInvite>>('1/businessinvites/mine')
             .then((response: AxiosResponse<PaginatedJsonResponse<BusinessInvite>>) => {
                 return response.data.data;
            });
    }

    /**
     * Decline an invitation to join a business
     *
     * @param id
     *
     * @returns Promise<BusinessInvite>
     */
    decline(id:  Xuid<SupportedXuid.BusinessInvite>) {
        return this.client
             .get<JsonResponse<null>>('1/businessinvites/' + id + '/decline')
             .then((response: AxiosResponse<JsonResponse<null>>) => {
                return response.data.data;
            });
    }

    /**
     * Accept an invitation to join a business
     *
     * @param id
     *
     * @returns Promise<BusinessInvite>
     */
    accept(id:  Xuid<SupportedXuid.BusinessInvite>) {
        return this.client
             .get<JsonResponse<null>>('1/businessinvites/' + id + '/accept')
             .then((response: AxiosResponse<JsonResponse<null>>) => {
                return response.data.data;
            });
    }

    /**
     * Withdraw an invitation to join a business
     *
     * @param id
     *
     * @returns Promise<BusinessInvite>
     */
    withdraw(id:  Xuid<SupportedXuid.BusinessInvite>) {
        return this.client
             .get<JsonResponse<null>>('1/businessinvites/' + id + '/withdraw')
             .then((response: AxiosResponse<JsonResponse<null>>) => {
                return response.data.data;
            });
    }

    /**
     * Get all invitations pending for a business
     *
     * @param business_id
     *
     * @returns Promise<PaginatedJsonResponse<BusinessInvite[]>>
     */
    pending(business_id: Xuid<SupportedXuid.Business>) {
        return this.client
             .get<PaginatedJsonResponse<BusinessInvite>>('1/businessinvites/business/' + business_id)
             .then((response: AxiosResponse<PaginatedJsonResponse<BusinessInvite>>) => {
                 return response.data.data;
            });
    }
}

export default BusinessInvites;
