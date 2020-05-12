import Client from '../Client/Client';
import Config from '../Config/Config';

abstract class Service {
    protected client: Client;

    protected config: Config;

    constructor(config: Config, client: Client) {
        this.client = client;
        this.config = config;
    }
}

export default Service;