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
    Instance,
    Stage
};
/* tslint:disable-next-line:no-shadowed-variable */
type Xuid<SupportedXuid> = string;

export default Xuid;
