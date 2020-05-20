import { ConfigInterface } from "../Interfaces/Config";

class Config extends Map<string, any> implements ConfigInterface {
    get(key: string, _default?: any): any {
        if (this.has(key)) {
            return Map.prototype.get.call(this, key);
        }

        return _default;
    }
}

export default Config;
