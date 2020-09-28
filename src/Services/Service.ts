import {AxiosInstance} from "axios";
import {ConfigInterface} from '../Interfaces/Config';

interface EventPayload extends Object {
    method: string;
    data: object;
};

type EventHandler = ((payload: EventPayload) => void);

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
    protected subscriptions: Map<string, EventHandler[]>;

    /**
     * Creates an instance of service.
     * @param config
     * @param client
     */
    constructor(config: ConfigInterface, client: AxiosInstance) {
        this.client = client;
        this.config = config;
        this.subscriptions = new Map<string, EventHandler[]>();

        this.boot();
    }

    boot(): Service {
        return this;
    }

    /**
     * Event Subscriber
     * @param event
     * @param handler
     * @returns Service
     */
    on(event: string, handler: EventHandler): Service {
        if (!this.subscriptions.has(event)) {
            return this;
        }

        const existingSubscriptions = this.subscriptions.get(event)!;

        this.subscriptions.set(event, existingSubscriptions.concat([handler]));

        return this;
    }

    /**
     * Subscribe a onetime event subscriber
     * @param event
     * @param handler
     * @returns Service
     */
    once(event: string, handler: EventHandler): Service {
        if (!this.subscriptions.has(event)) {
            return this;
        }

        const existingSubscriptions = this.subscriptions.get(event)!;
        const selfDeletingHandler = (payload: EventPayload) => {
            handler(payload);

            const subscriptions = this.subscriptions.get(event);

            subscriptions?.splice(existingSubscriptions.length, 1);

            this.subscriptions.set(event, subscriptions!);
        };

        this.subscriptions.set(event, existingSubscriptions.concat([selfDeletingHandler]));

        return this;
    }

    /**
     * Registers events
     * @param event
     * @returns Service
     */
    registerEvent(event: string): Service {
        if (!this.subscriptions.has(event)) {
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
        if (!this.subscriptions.has(event)) {
            return this;
        }

        this.subscriptions.get(event)
            ?.forEach((handler) => {
                handler(payload);
            });

        return this;
    }
}

export default Service;
