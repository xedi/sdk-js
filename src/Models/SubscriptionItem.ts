/**
 * SubscriptionItem
 */
export default interface SubscriptionItem extends Object {
    id: string;
    object: string;
    billing_thresholds: object;
    created: number;
    metadata: object;
    plan: object;
    price: object;
    quantity: number;
    subscription: string;
    tax_rates: object;
}
