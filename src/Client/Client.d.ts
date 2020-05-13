import Config from '../Config/Config';
import HttpResponse from '../Interfaces/HttpResponse';

declare class Client {
    constructor(config: Config);
    get<T>(uri: string, params: object): Promise<HttpResponse<T>>;
    delete<T>(uri: string): Promise<HttpResponse<T>>;
    post<T>(uri: string, params: object): Promise<HttpResponse<T>>;
    patch<T>(uri: string, params: object): Promise<HttpResponse<T>>;
}

export default Client;