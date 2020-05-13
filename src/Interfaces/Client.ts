import HttpResponse from './HttpResponse';
import HTTP_METHODS from '../Enums/HTTP_METHODS';

interface Client {
  delete<T>(uri: string): Promise<HttpResponse<T>>;
  post<T>(uri: string, params: object): Promise<HttpResponse<T>>;
  patch<T>(uri: string, params: object): Promise<HttpResponse<T>>;
  request<T>(method: HTTP_METHODS, uri: string, params: object, headers: HeadersInit): Promise<HttpResponse<T>>;
}

export default Client;

export {Client as ClientInterface}