import Client from '../Client/Client';
import Config from '../Config/Config';

/**
 * Service
 */
abstract class Service {
    /**
     * HTTP Client
     */
    protected client: Client;

    /**
     * Config
     */
    protected config: Config;

    /**
     * Creates an instance of service.
     * @param config 
     * @param client 
     */
    constructor(config: Config, client: Client) {
        this.client = client;
        this.config = config;
    }
}

export default Service;