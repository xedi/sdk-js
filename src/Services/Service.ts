import { AxiosInstance } from "axios";
import { ConfigInterface } from '../Interfaces/Config';

/**
 * Service
 */
abstract class Service {
    /**
     * HTTP Client
     */
    protected client: AxiosInstance;

    /**
     * Config
     */
    protected config: ConfigInterface;

    /**
     * Creates an instance of service.
     * @param config
     * @param client
     */
    constructor(config: ConfigInterface, client: AxiosInstance) {
        this.client = client;
        this.config = config;
    }
}

export default Service;