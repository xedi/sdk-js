/**
 * Usage
 */
export default interface Usage extends Object {
    id: string;
    object: string;
    livemode: boolean;
    quantity: number;
    subscription_item: string;
    timestamp: number;
}
