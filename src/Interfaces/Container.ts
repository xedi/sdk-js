/**
 * Container interface
 */
export default interface ContainerInterface {
    /**
     * Resolve abstract instances
     * @param abstract
     * @returns resolve
     */
    resolve(abstract: string): any;
}
