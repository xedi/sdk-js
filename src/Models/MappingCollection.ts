import Xuid, { SupportedXuid } from "../Utils/Xuid";

export default interface MappingCollection extends Object {
    _id: Xuid<SupportedXuid.MappingCollection>;
    meta: object;
    data: object;
};
