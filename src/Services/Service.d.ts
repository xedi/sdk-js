import Client from '../Client/Client';
import Config from '../Config/Config';

declare class Service {
    client: Client;
    config: Config;
    constructor(config: Config, client: Client);
}

export default Service;