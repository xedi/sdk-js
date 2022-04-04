import Xuid, {SupportedXuid} from "../Utils/Xuid";

/**
 * Location
 */
export default interface Location extends Object {
    _id: Xuid<SupportedXuid.Location>,
    business_id: Xuid<SupportedXuid.Business>,
    location_ana_code: string,
    customer_name: string,
    branch_code:string,
    cloc1: string,
    cloc2: string,
    cloc3: string,
    cname: string,
    cadd1: string,
    cadd2: string,
    cadd3: string,
    cadd4: string,
    cadd5: string
}
