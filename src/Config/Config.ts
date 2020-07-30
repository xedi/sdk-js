import { ConfigInterface } from "../Interfaces/Config";

type EventHandler = (( payload: any) => void);

class Config extends Map<string, any> implements ConfigInterface {
    /**
     * Subscriptions
     */
    protected subscriptions: Map<string, EventHandler[]>;

    /**
     * Creates an instance of config.
     * @param [entries]
     */
    constructor(entries?: readonly (readonly [string, any])[] | null) {
        super(entries);

        this.subscriptions = new Map<string, EventHandler[]>();
    }

    get(key: string, _default?: any): any {
        if (this.has(key)) {
            return Map.prototype.get.call(this, key);
        }

        return _default;
    }

    set(key: string, value: any): any {
        this.trigger(`${key}.updated`, value);

        return Map.prototype.set.call(this, key, value);
    }

    /**
     * Event Subscriber
     * @param event
     * @param handler
     * @returns Config
     */
    on(event: string, handler: EventHandler) {
        if (this.subscriptions === undefined) {
            return this;
        }

        if (! this.subscriptions.has(event)) {
            this.subscriptions.set(event, []);
        }

        const existingSubscriptions = this.subscriptions.get(event)!;

        this.subscriptions.set(event, existingSubscriptions.concat([ handler ]));

        return this;
    }

    /**
     * Triggers events
     * @param event
     * @param payload
     * @returns Config
     */
    trigger(event: string, payload: any) {
        if (this.subscriptions === undefined) {
            return this;
        }

        if (! this.subscriptions.has(event)) {
            this.subscriptions.set(event, []);
        }

        this.subscriptions.get(event)
            ?.forEach((handler) => {
                handler(payload);
            });

        return this;
    }
}

export default Config;
