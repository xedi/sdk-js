/**
 * Invoice
 */
export default interface Invoice extends Object {
    id: string;
    object: string;
    account_country: string;
    account_name: string;
    amount_due: number;
    amount_paid: number;
    amount_remaining: number;
    application_fee_amount: number;
    attempt_count: number;
    attempted: boolean;
    auto_advance: boolean;
    billing_reason: string;
    charge: string;
    collection_method: string;
    created: number;
    currency: string;
    custom_fields: object;
    customer: string;
    customer_address: string;
    customer_email: string;
    customer_name: string;
    customer_phone: string;
    customer_shipping: string;
    customer_tax_exempt: string;
    customer_tax_ids: object;
    default_payment_method: string;
    default_source: string;
    default_tax_rates: object;
    description: string;
    discount: object;
    due_date: number;
    ending_balance: number;
    footer: string;
    hosted_invoice_url: string;
    invoice_pdf: string;
    lines: object;
    livemode: boolean;
    metadata: object;
    next_payment_attempt: number;
    number: string;
    paid: boolean;
    payment_intent: string;
    period_end: number;
    period_start: number;
    post_payment_credit_notes_amount: number;
    pre_payment_credit_notes_amount: number;
    receipt_number: string;
    starting_balance: number;
    statement_descriptor: string;
    status: string;
    status_transitions: object;
    subscription: string;
    subtotal: number;
    tax: number;
    tax_percent: number;
    total: number;
    total_tax_amounts: object;
    transfer_data: object;
    webhooks_delivered_at: number;
}
