import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Instance
 */
export default interface Instance extends Object {
    _id: Xuid<SupportedXuid.Instance>;
    name: string;
    description?: string;
    template_id?: string;
    is_template: boolean;
    owner_id?: string;
    creator_id?: string;
    connection_id?: string;
    document_group_id?: string;
}
