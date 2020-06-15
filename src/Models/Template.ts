import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Template
 */
export default interface Template extends Object {
    _id: Xuid<SupportedXuid.Template>;
    name: string;
    description?: string;
    is_template: boolean;
    owner_id?: Xuid<SupportedXuid.Business>
    creator_id?: Xuid<SupportedXuid.User>
    connection_id?:Xuid<SupportedXuid.Connection>
    document_group_id?: Xuid<SupportedXuid.DocumentGroup>
}
