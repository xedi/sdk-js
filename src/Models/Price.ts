import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Price
 */
export default interface Price extends Object {
    _id: Xuid<SupportedXuid.Price>;
    product_id: Xuid<SupportedXuid.Product>;
    partnership_id: Xuid<SupportedXuid.Partnership>;
    tax_rate_id: Xuid<SupportedXuid.TaxRate>;
    cost: number;
}
