/**
 * StripeTax
 */
export default interface StripeTax extends Object {
    id: string;
    object: string;
    active: boolean;
    created: number;
    description: string;
    display_name: string;
    inclusive: boolean;
    jurisdiction: string;
    livemode: boolean;
    metadata: object;
    percentage: number;
}
