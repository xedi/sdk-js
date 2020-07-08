import Xuid, { SupportedXuid } from "../Utils/Xuid";

/**
 * Network Connection
 */
export default interface NetworkConnection extends Object {

    _id: Xuid<SupportedXuid.NetworkConnection>;
    partnership_id:Xuid<SupportedXuid.Partnership>;
    from_mailbox:Xuid<SupportedXuid.Mailbox>;
    to_mailbox:Xuid<SupportedXuid.Mailbox>;
    template_id?: Xuid<SupportedXuid.Template>;
    network_status: string;
    connection_type:string;

}
