import ContainerInterface from '../Interfaces/Container';
import Config from '../Config/Config';

/**
 * Container
 */
export default class Container implements ContainerInterface {
    /**
     * Resolved instances
     */
    private instances: Map<String, Object>;

    /**
     * Binding function to resolve instances
     */
    private bindings: Map<String, Function>;

    /**
     * Config
     */
    private config: Config;
    
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
        this.config = new Config();

        this.boot();
    }

    /**
     * Boot the container
     */
    protected boot(): void {}

    /**
     * Resolves instance
     * @returns instance 
     */
    static resolveInstance(): ContainerInterface {
        if (this.instance === undefined) {
            this.instance = new Container();
        }

        return this.instance;
    }

    /**
     * Singletons container
     * @param abstract 
     * @param factory 
     * @returns singleton 
     */
    singleton(abstract: string, factory: Function): ContainerInterface {
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

            let instance: object = (function (callable: Function, container, config) {
                return callable(container, config);
            })(this.bindings.get(abstract)!, this, this.config);

            this.instances.set(abstract, instance);
        }

        return this.instances.get(abstract);
    }
}