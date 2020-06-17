/**
 * Plan
 */
export default interface Plan extends Object {
    id: string;
    object: string;
    active: boolean;
    aggregate_usage: string;
    amount: number;
    amount_decimal: number;
    billing_scheme: string;
    created: number;
    currency: string;
    interval: string;
    interval_count: number;
    livemode: boolean;
    metadata: object;
    nickname: string;
    product: string;
    tiers: object;
    tiers_mode: string;
    transform_usage: object;
    trial_period_days: number;
    usage_type: string;
}
