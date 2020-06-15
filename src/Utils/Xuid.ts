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
    Stage,
    Price,
    Partnership,
    TaxRate,
    Connection,
    DocumentGroup,
    DocumentType
};
/* tslint:disable-next-line:no-shadowed-variable */
type Xuid<SupportedXuid> = string;

export default Xuid;
