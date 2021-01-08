import Xuid, { SupportedXuid } from "../Utils/Xuid";

export default interface File extends Object{
    _id: Xuid<SupportedXuid.File>;
    internal_path: string;
    public_url: string;
    owner_id: Xuid<SupportedXuid>;
    type: string;
}
