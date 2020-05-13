import { ClientInterface } from '../Interfaces/Client';
import { ConfigInterface } from '../Interfaces/Config';

/**
 * Service
 */
abstract class Service {
    /**
     * HTTP Client
     */
    protected client: ClientInterface;

    /**
     * Config
     */
    protected config: ConfigInterface;

    /**
     * Creates an instance of service.
     * @param config 
     * @param client 
     */
    constructor(config: ConfigInterface, client: ClientInterface) {
        this.client = client;
        this.config = config;
    }
}

export default Service;