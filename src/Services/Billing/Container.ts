import Config from '../../Interfaces/Config';
import { LogManagerInterface } from '../../Interfaces/Logger';
import Translator from '../../Translator/Translator';
import ContainerInterface from '../../Interfaces/Container';
import SubscriptionItem from './SubscriptionItem';
import Container from '../../Container/Container';

class Billing extends Container
{
    constructor(app: Container) {
        super();

        /* Share instances between the two containers */
        super.setInstance('config', app.resolve('config'));
        super.setInstance('logger', app.resolve('logger'));
        super.setInstance('translator', app.resolve('translater'));
        super.setInstance('client', app.resolve('client'));
    }

    protected boot() {
        super.boot();
        /*
            DO NOT register instances in here.
            config, logger, translate and client aren't bound yet
        */
        /* istanbul ignore next Simple Method */
        super.singleton('subscription-item', (app: ContainerInterface, config: Config) => {
            return new SubscriptionItem(
                config,
                app.resolve('client')
            );
        });

    }

    /**
     * Gets an instance of the Config Bag
     *
     * @returns Config
     */
    /* istanbul ignore next Simple Method */
    get Config(): Config {
        return super.resolve('config');
    }

    /**
     * Gets an instance of the LogManager
     *
     * @return LogManager
     */
    /* istanbul ignore next Simple Method */
    get Logger(): LogManagerInterface {
        return super.resolve('logger');
    }

    /**
     * Gets an instance of the Translator
     *
     * @return Translator
     */
    /* istanbul ignore next Simple Method */
    get Translator(): Translator {
        return super.resolve('translator');
    }

    /**
     * Gets an instance of the SubscriptionItem API
     *
     * @return SubscriptionItem
     */
    /* istanbul ignore next Simple Method */
    get SubscriptionItem(): SubscriptionItem {
        return super.resolve('subscription-item');
    }
}

export default Billing;
