export enum SupportedXuid {
    Business,
    User
};

type Xuid<SupportedXuid> = String;

export default Xuid;