import Client from '../Client/Client';

declare class Service {
    client: Client;
    constructor(config: Object, client: Client);
}

export default Service;