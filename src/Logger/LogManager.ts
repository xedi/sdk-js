import { LoggerInterface, LogManagerInterface } from '../Interfaces/Logger';
import Config from '../Interfaces/Config';
import LoggerAdaptor from './LoggerAdaptor';
import Logger from './Logger';
import NullLogger from './NullLogger';

class LogManager extends LoggerAdaptor implements LoggerInterface, LogManagerInterface
{
    private config: Config;

    constructor(config: Config)
    {
        super();

        this.config = config;
    }

    get dev(): LoggerInterface
    {
        if (this.config.get('mode', 'production') === 'local') {
            return new Logger();
        }

        return new NullLogger();
    }

    get production(): LoggerInterface
    {
        if (this.config.get('mode', 'production') !== 'local') {
            return new Logger();
        }

        return new NullLogger();
    }
}

export default LogManager;
