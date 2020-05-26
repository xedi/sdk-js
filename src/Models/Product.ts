import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Product
 */
export default interface Product extends Object {
    _id: Xuid<SupportedXuid.Product>;
    business_id: Xuid<SupportedXuid.Business>;
    identifier: String;
    description: String;
    spr01?: String;
    spr02?: String;
    spr03?: String;
    sacu?: String;
    cpr01?: String;
    cpr02?: String;
    unor?: String;
    units?: Number;
}
