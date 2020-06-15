/**
 * Log manager
 */
interface LogManager {
    dev: Logger;
    production: Logger;
}

/**
 * Logger
 */
interface Logger {
    log(message?: any, ...optionalParams: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;
    debug(message?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
};

export default Logger;

export {
    Logger as LoggerInterface,
    LogManager as LogManagerInterface
};
