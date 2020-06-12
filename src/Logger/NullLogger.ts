import { LoggerInterface } from '../Interfaces/Logger';

class NullLogger implements LoggerInterface
{
    log(message?: any, ...optionalParams: any[]): void
    {
    }

    info(message?: any, ...optionalParams: any[]): void
    {
    }

    debug(message?: any, ...optionalParams: any[]): void
    {
    }

    error(message?: any, ...optionalParams: any[]): void
    {
    }

    warn(message?: any, ...optionalParams: any[]): void
    {
    }
}

export default NullLogger;
