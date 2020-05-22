import { AxiosInstance } from "axios";
import { ConfigInterface } from '../Interfaces/Config';

/**
 * Service
 */
abstract class Service {
    /**
     * HTTP Client
     */
    protected client: AxiosInstance;

    /**
     * Config
     */
    protected config: ConfigInterface;

    /**
     * Subscriptions
     */
    protected subscriptions: Map<string, Function[]>;

    /**
     * Creates an instance of service.
     * @param config
     * @param client
     */
    constructor(config: ConfigInterface, client: AxiosInstance) {
        this.client = client;
        this.config = config;
        this.subscriptions = new Map<string, Function[]>();

        this.boot();
    }

    boot(): Service {
        return this;
    }

    /**
     * Event Subscriber
     * @param event
     * @param callable
     * @returns Service
     */
    on(event: string, callable: Function): Service {
        if (! this.subscriptions.has(event)) {
           return this;
        }

        let existing_subscriptions = this.subscriptions.get(event)!;

        this.subscriptions.set(event, existing_subscriptions.concat([ callable ]));

        return this;
    }

    /**
     * Registers events
     * @param event
     * @returns Service
     */
    registerEvent(event: string): Service {
        if (! this.subscriptions.has(event)) {
            this.subscriptions.set(event, []);
        }

        return this;
    }

    /**
     * Triggers events
     * @param event
     * @param payload
     * @returns Service
     */
    trigger(event: string, payload: any): Service {
        if (! this.subscriptions.has(event)) {
            return this;
        }

        this.subscriptions.get(event)
            ?.forEach((callable) => {
                callable(payload);
            });

        return this;
    }
}

export default Service;
