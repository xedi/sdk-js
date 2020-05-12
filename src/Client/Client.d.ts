declare class Client {
    constructor(...configurations: String[]);
    delete(uri: String): Promise<Response>;
    post(uri: String, params?: Object): Promise<Response>;
    patch(uri: String, params?: Object): Promise<Response>;
}

export default Client;