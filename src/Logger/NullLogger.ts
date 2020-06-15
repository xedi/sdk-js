import { LoggerInterface } from '../Interfaces/Logger';

class NullLogger implements LoggerInterface
{
    log(message?: any, ...optionalParams: any[]): void
    {
        // noop
    }

    info(message?: any, ...optionalParams: any[]): void
    {
        // noop
    }

    debug(message?: any, ...optionalParams: any[]): void
    {
        // noop
    }

    error(message?: any, ...optionalParams: any[]): void
    {
        // noop
    }

    warn(message?: any, ...optionalParams: any[]): void
    {
        // noop
    }
}

export default NullLogger;
