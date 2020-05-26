/**
 * Supported xuidß
 */
export enum SupportedXuid {
    Business,
    User,
    Product
};

type Xuid<SupportedXuid> = String;

export default Xuid;
