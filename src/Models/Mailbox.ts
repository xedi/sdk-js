import Xuid, { SupportedXuid } from "../Utils/Xuid";
import ConnectionType from "../Enums/ConnectionType";

export default interface Mailbox extends Object {
    _id: Xuid<SupportedXuid.Mailbox>;
    name?: String;
    ana_code?: String;
    business_id: Xuid<SupportedXuid.Business>;
    qualifier?: String;
    connection_type: ConnectionType;
    default_mailbox: Boolean;
    edi_type: String;
    is_gln: Boolean;
    gln: String;
};
