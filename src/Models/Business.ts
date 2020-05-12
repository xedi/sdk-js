import Xuid, { SupportedXuid } from '../Utils/Xuid';

/**
 * Business
 */
export default interface Business extends Object {
    _id: Xuid<SupportedXuid.Business>;
    business_name: String;
    address_1: String;
    address_2: String;
    address_3: String;
    address_4: String;
    post_code: String;
    vat_code: String;
    invoice_name: String;
    country_code: String;
    contact_name: String;
    contact_email: String;
    contact_no: Number;
    website: String;
    logo: String;
    requires_gln: Boolean;
    slug: String;
    external: Boolean;
    public: Boolean;
}