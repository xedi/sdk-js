import Xuid, {SupportedXuid} from "../Utils/Xuid";

export default interface ExternalRequestLog extends Object {
    _id: Xuid<SupportedXuid.ExternalRequestLog>;
    business_id: Xuid<SupportedXuid.Business>;
    document_id: Xuid<SupportedXuid.Document>;
    operation: string;
    status_code: string;
    method: string;
    request_url: string;
    request_data: string;
    response: string;
}
