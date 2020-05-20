import ContainerInterface from '../Interfaces/Container';
/**
 * Container
 */
export default class Container implements ContainerInterface {
    /**
     * Resolved instances
     */
    private instances;
    /**
     * Binding function to resolve instances
     */
    private bindings;
    /**
     * Instance of the container
     */
    private static instance;
    /**
     * Creates an instance of container.
     */
    constructor();
    /**
     * Boot the container
     */
    protected boot(): void;
    /**
     * Resolves instance
     * @returns instance
     */
    static resolveInstance(): ContainerInterface;
    /**
     * Singletons container
     * @param abstract
     * @param factory
     * @returns singleton
     */
    singleton(abstract: string, factory: Function): ContainerInterface;
    /**
     * Provide an instance to the container
     * @param abstract
     * @param concrete
     * @returns instance
     */
    instance(abstract: string, concrete: any): ContainerInterface;
    /**
     * Resolves an instance from a binding
     * @param abstract
     * @returns resolve
     */
    resolve(abstract: string): any | void;
    /**
     * Determines whether the container has a binding for an abstract
     * @param abstract
     * @returns true if binding exists
     */
    hasBinding(abstract: string): boolean;
}
