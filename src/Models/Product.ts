import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Product
 */
export default interface Product extends Object {
    _id: Xuid<SupportedXuid.Product>;
    business_id: Xuid<SupportedXuid.Business>;
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
