import Xuid, { SupportedXuid } from "../Utils/Xuid";
import ConnectionType from "../Enums/ConnectionType";

export default interface Mailbox extends Object {
    _id: Xuid<SupportedXuid.Mailbox>;
    name?: string;
    ana_code?: string;
    business_id: Xuid<SupportedXuid.Business>;
    qualifier?: string;
    connection_type: ConnectionType;
    default_mailbox: boolean;
    edi_type: string;
    is_gln: boolean;
    gln: string;
};
