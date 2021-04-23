import Xuid, { SupportedXuid } from "../Utils/Xuid";

export default interface Layout extends Object{
    _id: Xuid<SupportedXuid.Layout>;
}
