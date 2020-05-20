import { ConfigInterface } from "../Interfaces/Config";
declare class Config extends Map<string, any> implements ConfigInterface {
    get(key: string, _default?: any): any;
}
export default Config;
