import Xuid, { SupportedXuid } from "../Utils/Xuid";

export default interface Group extends Object
{
    _id: Xuid<SupportedXuid.Group>;
    name: string;
    owner: Xuid<SupportedXuid.Business>;
    group_type_id: Xuid<SupportedXuid.GroupType>;
}