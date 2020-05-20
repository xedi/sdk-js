/**
 * Supported xuidß
 */
export declare enum SupportedXuid {
    Business = 0,
    User = 1
}
declare type Xuid<SupportedXuid> = String;
export default Xuid;
