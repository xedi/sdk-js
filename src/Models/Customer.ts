/**
 * Customer
 */
export default interface Customer extends Object {
    id: string;
    object: string;
    address: string;
    balance: number;
    created: number;
    currency: string;
    default_source: string;
    delinquent: boolean;
    description: string;
    discount: object;
    email: string;
    invoice_prefix: string;
    invoice_settings: object
    livemode: boolean;
    metadata: object;
    name: string;
    next_invoice_sequence: number;
    phone: string;
    preferred_locales: object;
    shipping: object;
    sources: object
    subscriptions: object
    tax_exempt: string;
    tax_ids: object;
}
