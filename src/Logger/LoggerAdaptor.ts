import { LoggerInterface } from '../Interfaces/Logger';
/* tslint:disable:no-console */
abstract class LoggerAdaptor implements LoggerInterface
{
    log(message?: any, ...optionalParams: any[]): void
    {
        console.log(...arguments);
    }

    info(message?: any, ...optionalParams: any[]): void
    {
        console.info(...arguments);
    }

    debug(message?: any, ...optionalParams: any[]): void
    {
        console.debug(...arguments);
    }

    error(message?: any, ...optionalParams: any[]): void
    {
        console.error(...arguments);
    }

    warn(message?: any, ...optionalParams: any[]): void
    {
        console.warn(...arguments);
    }
}

export default LoggerAdaptor;
