import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Product
 */
export default interface ProductInformation extends Object {
    _id: Xuid<SupportedXuid.ProductInformation>;
    business_id: Xuid<SupportedXuid.Business>;
    product_id: Xuid<SupportedXuid.ProductInformation>;
    partnership_id: string;
    identifier: string;
    description: string;
    spr01?: string;
    spr02?: string;
    spr03?: string;
    sacu?: string;
    cpr01?: string;
    cpr02?: string;
    unor?: string;
    units?: number;
}
