import Xuid, { SupportedXuid } from '../Utils/Xuid';

/**
 * Mailing List
 */
export default interface MailingList extends Object {
    _id: Xuid<SupportedXuid.MailingList>;
    business_id: Xuid<SupportedXuid.Business>;
    name: string;
    description: string;
}
