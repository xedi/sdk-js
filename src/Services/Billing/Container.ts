import Config from '../../Interfaces/Config';
import {LogManagerInterface} from '../../Interfaces/Logger';
import Translator from '../../Translator/Translator';
import ContainerInterface from '../../Interfaces/Container';
import Cards from './Cards'
import Customers from "./Customers";
import Invoices from "./Invoices";
import Plans from './Plans';
import Products from './Products';
import Subscriptions from './Subscriptions';
import SubscriptionItems from './SubscriptionItems';
import Usages from './Usages';
import Container from '../../Container/Container';
import Constants from './../../Constants/Billing';

class Billing extends Container {
    constructor(app: Container) {
        super();

        /* Share instances between the two containers */
        super.setInstance('config', app.resolve('config'));
        super.setInstance('logger', app.resolve('logger'));
        super.setInstance('translator', app.resolve('translator'));
        super.setInstance('client', app.resolve('client'));
    }

    protected boot() {
        super.boot();
        /*
            DO NOT register instances in here.
            config, logger, translate and client aren't bound yet
        */

        /* istanbul ignore next Simple Method */
        super.singleton('cards', (app: ContainerInterface, config: Config) => {
            return new Cards(
                config,
                app.resolve('client')
            );
        });

        /* istanbul ignore next Simple Method */
        super.singleton('customers', (app: ContainerInterface, config: Config) => {
            return new Customers(
                config,
                app.resolve('client')
            );
        });

        /* istanbul ignore next Simple Method */
        super.singleton('invoices', (app: ContainerInterface, config: Config) => {
            return new Invoices(
                config,
                app.resolve('client')
            );
        });

        /* istanbul ignore next Simple Method */
        super.singleton('plans', (app: ContainerInterface, config: Config) => {
            return new Plans(
                config,
                app.resolve('client')
            );
        });

        /* istanbul ignore next Simple Method */
        super.singleton('products', (app: ContainerInterface, config: Config) => {
            return new Products(
                config,
                app.resolve('client')
            );
        });

        /* istanbul ignore next Simple Method */
        super.singleton('subscriptions', (app: ContainerInterface, config: Config) => {
            return new Subscriptions(
                config,
                app.resolve('client')
            );
        });

        /* istanbul ignore next Simple Method */
        super.singleton('subscription-items', (app: ContainerInterface, config: Config) => {
            return new SubscriptionItems(
                config,
                app.resolve('client')
            );
        });

        /* istanbul ignore next Simple Method */
        super.singleton('usages', (app: ContainerInterface, config: Config) => {
            return new Usages(
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
     * Gets Constants instance
     *
     * @return LogManager
     */

    /* istanbul ignore next Simple Method */
    get Constants() {
        return Constants;
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
     * Gets an instance of the Card API
     *
     * @return Cards
     */

    /* istanbul ignore next Simple Method */
    get Cards(): Cards {
        return super.resolve('cards');
    }

    /**
     * Gets an instance of the Customer API
     *
     * @return Customers
     */

    /* istanbul ignore next Simple Method */
    get Customers(): Customers {
        return super.resolve('customers');
    }

    /**
     * Gets an instance of the Invoice API
     *
     * @return Invoices
     */

    /* istanbul ignore next Simple Method */
    get Invoices(): Invoices {
        return super.resolve('invoices');
    }

    /**
     * Gets an instance of the Plan API
     *
     * @return Plans
     */

    /* istanbul ignore next Simple Method */
    get Plans(): Plans {
        return super.resolve('plans');
    }

    /**
     * Gets an instance of the Product API
     *
     * @return Products
     */

    /* istanbul ignore next Simple Method */
    get Products(): Products {
        return super.resolve('products');
    }

    /**
     * Gets an instance of the Subscription API
     *
     * @return Subscriptions
     */

    /* istanbul ignore next Simple Method */
    get Subscriptions(): Subscriptions {
        return super.resolve('subscriptions');
    }

    /**
     * Gets an instance of the SubscriptionItem API
     *
     * @return SubscriptionItems
     */

    /* istanbul ignore next Simple Method */
    get SubscriptionItems(): SubscriptionItems {
        return super.resolve('subscription-items');
    }

    /**
     * Gets an instance of the Usage API
     *
     * @return Usages
     */

    /* istanbul ignore next Simple Method */
    get Usages(): Usages {
        return super.resolve('usages');
    }
}

export default Billing;
