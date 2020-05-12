import Client from '../Client/Client';

abstract class Service {
    protected client: Client;

    constructor(config: Object, client: Client) {
        this.client = client;
    }
}

export default Service;