import { AxiosInstance } from 'axios';
import Container from './Container/Container';
import * as Services from './Services/Services';
/**
 * Xedi
 */
declare class Xedi extends Container {
    /**
     * Boots the Container
     */
    protected boot(): void;
    /**
     * Get an instance of the HttpClient
     */
    static get Client(): AxiosInstance;
    /**
     * Get an instance of the Auth API
     */
    static get Auth(): Services.Auth;
    /**
     * Get an instance of the Users API
     */
    static get Users(): Services.Users;
    /**
     * Get an instance of the Businesses API
     */
    static get Businesses(): Services.Businesses;
}
export default Xedi;
