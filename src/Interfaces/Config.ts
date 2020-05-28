interface Config extends Map<string, any> {
    get(key: string, _default?: any): any;
}

export default Config;

export { Config as ConfigInterface };
