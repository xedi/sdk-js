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
    DocumentType,
    Partner,
    DocType,
    Event,
    NetworkConnection,
    Notification,
    MailingList,
    Group,
    GroupType,
    NetworkConfiguration,
    Mapping,
    DocumentSetting
};
/* tslint:disable-next-line:no-shadowed-variable */
type Xuid<SupportedXuid> = string;

export default Xuid;
