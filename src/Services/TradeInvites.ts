import {AxiosResponse} from 'axios';
import Service from './Service';
import JsonResponse from '../Interfaces/JsonResponse';
import PaginatedJsonResponse from '../Interfaces/PaginatedJsonResponse';
import {TradeInvite} from '../Models/Models';
import Xuid, {SupportedXuid} from '../Utils/Xuid';

/**
 * Businesses
 */
class TradeInvites extends Service {

    /**
     * Create a TradeInvite invite
     *
     * @param invite
     *
     * @returns Promise<JsonResponse<TradeInvite[]>>
     */
    create(invite: TradeInvite) {
        return this.client
            .post<JsonResponse<TradeInvite>>('1/tradeinvites/business/' + invite.business_id, invite)
            .then((response: AxiosResponse<JsonResponse<TradeInvite>>) => {
                return response.data.data;
            });
    }

    /**
     * Get TradeInvite invites allocated to the authed user
     *
     * @returns Promise<PaginatedJsonResponse<TradeInvite[]>>
     */
    mine() {
        return this.client
             .get<PaginatedJsonResponse<TradeInvite>>('1/tradeinvites/mine')
             .then((response: AxiosResponse<PaginatedJsonResponse<TradeInvite>>) => {
                 return response.data.data;
            });
    }

    /**
     * Decline an invitation to trade with a business
     *
     * @param id
     *
     * @returns Promise<TradeInvite>
     */
    decline(id:  Xuid<SupportedXuid.TradeInvite>) {
        return this.client
             .get<JsonResponse<null>>('1/tradeinvites/' + id + '/decline')
             .then((response: AxiosResponse<JsonResponse<null>>) => {
                return response.data.data;
            });
    }

    /**
     * Accept an invitation to trade with a business
     *
     * @param id
     *
     * @returns Promise<TradeInvite>
     */
    accept(id:  Xuid<SupportedXuid.TradeInvite>) {
        return this.client
             .get<JsonResponse<null>>('1/tradeinvites/' + id + '/accept')
             .then((response: AxiosResponse<JsonResponse<null>>) => {
                return response.data.data;
            });
    }

    /**
     * Withdraw an invitation to trade with a business
     *
     * @param id
     *
     * @returns Promise<TradeInvite>
     */
    withdraw(id:  Xuid<SupportedXuid.BusinessInvite>) {
        return this.client
             .get<JsonResponse<null>>('1/tradeinvites/' + id + '/withdraw')
             .then((response: AxiosResponse<JsonResponse<null>>) => {
                return response.data.data;
            });
    }

    /**
     * Get all trade invitations pending for a business
     *
     * @param businessId
     *
     * @returns Promise<PaginatedJsonResponse<TradeInvite[]>>
     */
    pending(businessId: Xuid<SupportedXuid.Business>) {
        return this.client
             .get<PaginatedJsonResponse<TradeInvite>>('1/tradeinvites/business/' + businessId + '/pending')
             .then((response: AxiosResponse<PaginatedJsonResponse<TradeInvite>>) => {
                 return response.data.data;
            });
    }
}

export default TradeInvites;
