import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Instance
 */
export default interface Instance extends Object {
    _id: Xuid<SupportedXuid.Instance>;
    name: string;
    description?: string;
    template_id?: Xuid<SupportedXuid.Template>;
    is_template: boolean;
    owner_id?: Xuid<SupportedXuid.Business>
    creator_id?: Xuid<SupportedXuid.User>
    connection_id?:Xuid<SupportedXuid.Connection>
    document_group_id?: Xuid<SupportedXuid.DocumentGroup>
}
