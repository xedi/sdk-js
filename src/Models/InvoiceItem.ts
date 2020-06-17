/**
 * InvoiceItem
 */
export default interface InvoiceItem extends Object {
    id: string;
    object: string;
    amount: number;
    currency: string;
    customer: string;
    date: number;
    description: string;
    discountable: boolean;
    invoice: string;
    livemode: boolean;
    metadata: object;
    period: object;
    plan: object;
    price: object
    proration: boolean;
    quantity: number;
    subscription: string;
    tax_rates: object;
    unit_amount: number;
    unit_amount_decimal: number;
}
