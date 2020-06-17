/**
 * StripeProduct
 */
export default interface StripeProduct extends Object {
    id: string;
    object: string;
    active: true;
    attributes: object;
    created: number;
    description: string;
    images: object;
    livemode: boolean;
    metadata: object;
    name: string;
    statement_descriptor: string;
    type: string;
    unit_label: string;
    updated: number;
}
