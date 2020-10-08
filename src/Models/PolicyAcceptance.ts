import Xuid, { SupportedXuid } from '../Utils/Xuid';

/**
 * Policy Acceptance
 */
export default interface PolicyAcceptance extends Object {
    context_id: string;
    actor_id: Xuid<SupportedXuid.User>;
    policy_version: string;
    policy: string;
}
