import Xuid, { SupportedXuid } from "../Utils/Xuid";

export default interface Event extends Object{
    _id: Xuid<SupportedXuid.Event>;
    translation_key: string;
    translation_params: object;
    context_id: Xuid<SupportedXuid>;
    actor_id?: Xuid<SupportedXuid.User>;
}
