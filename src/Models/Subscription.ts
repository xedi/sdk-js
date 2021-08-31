/**
 * Subscription
 */
export default interface Subscription extends Object {
    id: string;
    object: string;
    application_fee_percent: number;
    billing_cycle_anchor: number;
    billing_thresholds: object;
    cancel_at: number;
    cancel_at_period_end: boolean;
    canceled_at: number;
    collection_method: string;
    created: number;
    current_period_end: number;
    current_period_start: number;
    customer: string;
    days_until_due: number;
    default_payment_method: string;
    default_source: string;
    default_tax_rates: object;
    discount: object;
    ended_at: number;
    items: object;
    latest_invoice: string;
    livemode: false;
    metadata: object;
    next_pending_invoice_item_invoice: number;
    pending_invoice_item_interval: object;
    pending_setup_intent: string;
    plan: object;
    quantity: number;
    schedule: string;
    start_date: number;
    status: string;
    tax_percent: number;
    trial_end: number;
    trial_start: number;
    success_url: string;
    cancel_url: string;
}
