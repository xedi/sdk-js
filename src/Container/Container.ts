import ContainerInterface from '../Interfaces/Container';
import Config from '../Config/Config';

export default class Container implements ContainerInterface {
    private instances: Map<String, Object>;

    private bindings: Map<String, Function>;

    private config: Config;
    
    private static instance: ContainerInterface;

    constructor() {
        this.instances = new Map();
        this.bindings = new Map();
        this.config = new Config();

        this.boot();
    }

    protected boot(): void {}

    static resolveInstance(): ContainerInterface {
        if (this.instance === undefined) {
            this.instance = new Container();
        }

        return this.instance;
    }

    singleton(abstract: string, factory: Function): ContainerInterface {
        this.bindings.set(abstract, factory);

        return this;
    }

    instance(abstract: string, concrete: any): ContainerInterface {
        this.instances.set(abstract, concrete);

        return this;
    }

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