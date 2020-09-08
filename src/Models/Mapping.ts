import Xuid, { SupportedXuid } from "../Utils/Xuid";

export default interface Mapping extends Object {
    _id: Xuid<SupportedXuid.Mapping>;
};
