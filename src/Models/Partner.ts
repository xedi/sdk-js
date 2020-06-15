import Xuid, { SupportedXuid } from '../Utils/Xuid';

/**
 * Business
 */
export default interface Partner extends Object {
    _id: Xuid<SupportedXuid.Partner>;
    business_name: string;
    address_1?: string;
    address_2?: string;
    address_3?: string;
    address_4?: string;
    post_code?: string;
    vat_code?: string;
    invoice_name?: string;
    country_code: string;
    contact_name?: string;
    contact_email?: string;
    contact_no?: number;
    website?: string;
    logo?: string;
    requires_gln?: boolean;
    slug?: string;
    external?: boolean;
    public?: boolean;
}
