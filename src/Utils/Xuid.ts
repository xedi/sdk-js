/**
 * Supported xuid
 */
export enum SupportedXuid {
    Business,
    User,
    Product,
    Mailbox,
    Template,
    Transition,
};
/* tslint:disable-next-line:no-shadowed-variable */
type Xuid<SupportedXuid> = string;

export default Xuid;
