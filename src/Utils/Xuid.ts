/**
 * Supported xuidß
 */
export enum SupportedXuid {
    Business,
    User,
    Product,
    Mailbox,
};

type Xuid<SupportedXuid> = String;

export default Xuid;
