import Xuid, {SupportedXuid} from "../Utils/Xuid";

export default interface Notification extends Object {
    _id: Xuid<SupportedXuid.Notification>;
    user_id: Xuid<SupportedXuid.User>;
    message: string;
    parameters: object;
    read: boolean;
};
