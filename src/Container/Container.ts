import ContainerInterface from '../Interfaces/Container';
import Config from '../Config/Config';
import LogManager from '../Logger/LogManager';

export type FactoryFunction = ((app: ContainerInterface, config: Config) => object);

/**
 * Container
 */
export default class Container implements ContainerInterface {
    /**
     * Resolved instances
     */
    private instances: Map<string, object>;

    /**
     * Binding function to resolve instances
     */
    private bindings: Map<string, FactoryFunction>;

    /**
     * Instance of the container
     */
    private static instance: ContainerInterface;

    /**
     * Creates an instance of container.
     */
    constructor() {
        this.instances = new Map();
        this.bindings = new Map();

        this.boot();
    }

    /**
     * Boot the container
     */
    protected boot(): void {
        this.instance('config', new Config());

        this.singleton('logger', (app: ContainerInterface, config: Config) => {
            return new LogManager(config);
        });
    }

    /**
     * Resolves instance
     * @returns instance
     */
    static resolveInstance(): ContainerInterface {
        if (this.instance === undefined) {
            this.instance = new this();
        }

        return this.instance;
    }

    /**
     * Singletons container
     * @param abstract
     * @param factory
     * @returns singleton
     */
    singleton(abstract: string, factory: FactoryFunction): ContainerInterface {
        this.bindings.set(abstract, factory);

        return this;
    }

    /**
     * Provide an instance to the container
     * @param abstract
     * @param concrete
     * @returns instance
     */
    instance(abstract: string, concrete: any): ContainerInterface {
        this.instances.set(abstract, concrete);

        return this;
    }

    /**
     * Resolves an instance from a binding
     * @param abstract
     * @returns resolve
     */
    resolve(abstract: string): any | void {
        if (! this.instances.has(abstract)) {
            if (! this.bindings.has(abstract)) {
                return undefined;
            }

            const instance: object = ((factory: FactoryFunction, container, config) => {
                return factory(container, config);
            })(this.bindings.get(abstract)!, this, this.resolve('config'));

            this.instances.set(abstract, instance);
        }

        return this.instances.get(abstract);
    }

    /**
     * Resets the stored instance
     * @param abstract
     * @returns instance
     */
    resetInstance(abstract: string): ContainerInterface {
        if (this.instances.has(abstract)) {
            this.instances.delete(abstract);
        }

        this.resolve(abstract);

        return this;
    }

    /**
     * Determines whether the container has a binding for an abstract
     * @param abstract
     * @returns true if binding exists
     */
    hasBinding(abstract: string): boolean {
        return this.bindings.has(abstract);
    }

    /**
     * Gets an instance of the Config bag
     */
    static get Config(): Config
    {
        return this.resolveInstance()
            .resolve('config');
    }

    /**
     * Gets an instance of the LogManager
     */
    static get Log(): LogManager
    {
        return this.resolveInstance()
            .resolve('logger');
    }
}
