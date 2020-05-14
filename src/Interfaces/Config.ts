interface Config extends Map<String, any> {
    get(key: string, _default?: any): any;
}

export default Config;

export { Config as ConfigInterface };