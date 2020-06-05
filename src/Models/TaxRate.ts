import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * TaxRate
 */
export default interface TaxRate extends Object {
    _id: Xuid<SupportedXuid.TaxRate>;
    business_id: Xuid<SupportedXuid.Business>;
    description: string,
    percentage: number,
    code: string
}
