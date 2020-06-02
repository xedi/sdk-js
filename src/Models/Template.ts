import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Template
 */
export default interface Template extends Object {
    _id: Xuid<SupportedXuid.Template>;
    name: string;
    description?: string;
    template_id?: string;
    is_template: boolean;
    owner_id?: string;
    creator_id?: string;
    connection_id?: string;
    document_group_id?: string;
}