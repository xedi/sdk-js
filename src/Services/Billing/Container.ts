import Config from '../../Interfaces/Config';
import {LogManagerInterface} from '../../Interfaces/Logger';
import Translator from '../../Translator/Translator';
import ContainerInterface from '../../Interfaces/Container';
import Customer from "./Customer";
import Invoice from "./Invoice";
import InvoiceItem from "./InvoiceItem";
import Plan from './Plan';
import Product from './Product';
import Subscription from './Subscription';
import SubscriptionItem from './SubscriptionItem';
import Usage from './Usage';
import Container from '../../Container/Container';
import Tax from "./Tax";

class Billing extends Container {
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
        super.singleton('customer', (app: ContainerInterface, config: Config) => {
            return new Customer(
                config,
                app.resolve('client')
            );
        });

        /* istanbul ignore next Simple Method */
        super.singleton('invoice', (app: ContainerInterface, config: Config) => {
            return new Invoice(
                config,
                app.resolve('client')
            );
        });

        /* istanbul ignore next Simple Method */
        super.singleton('invoice-item', (app: ContainerInterface, config: Config) => {
            return new InvoiceItem(
                config,
                app.resolve('client')
            );
        });

        /* istanbul ignore next Simple Method */
        super.singleton('plan', (app: ContainerInterface, config: Config) => {
            return new Plan(
                config,
                app.resolve('client')
            );
        });

        /* istanbul ignore next Simple Method */
        super.singleton('product', (app: ContainerInterface, config: Config) => {
            return new Product(
                config,
                app.resolve('client')
            );
        });

        /* istanbul ignore next Simple Method */
        super.singleton('subscription', (app: ContainerInterface, config: Config) => {
            return new Subscription(
                config,
                app.resolve('client')
            );
        });

        /* istanbul ignore next Simple Method */
        super.singleton('subscription-item', (app: ContainerInterface, config: Config) => {
            return new SubscriptionItem(
                config,
                app.resolve('client')
            );
        });

        /* istanbul ignore next Simple Method */
        super.singleton('tax', (app: ContainerInterface, config: Config) => {
            return new Tax(
                config,
                app.resolve('client')
            );
        });

        /* istanbul ignore next Simple Method */
        super.singleton('usage', (app: ContainerInterface, config: Config) => {
            return new Usage(
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
     * Gets an instance of the Customer API
     *
     * @return Customer
     */

    /* istanbul ignore next Simple Method */
    get Customer(): Customer {
        return super.resolve('customer');
    }

    /**
     * Gets an instance of the Invoice API
     *
     * @return Invoice
     */

    /* istanbul ignore next Simple Method */
    get Invoice(): Invoice {
        return super.resolve('invoice');
    }

    /**
     * Gets an instance of the InvoiceItem API
     *
     * @return InvoiceItem
     */

    /* istanbul ignore next Simple Method */
    get InvoiceItem(): InvoiceItem {
        return super.resolve('invoice-item');
    }

    /**
     * Gets an instance of the Plan API
     *
     * @return Plan
     */

    /* istanbul ignore next Simple Method */
    get Plan(): Plan {
        return super.resolve('plan');
    }

    /**
     * Gets an instance of the Product API
     *
     * @return Product
     */

    /* istanbul ignore next Simple Method */
    get Product(): Product {
        return super.resolve('product');
    }

    /**
     * Gets an instance of the Subscription API
     *
     * @return Subscription
     */

    /* istanbul ignore next Simple Method */
    get Subscription(): Subscription {
        return super.resolve('subscription');
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

    /**
     * Gets an instance of the Tax API
     *
     * @return Tax
     */

    /* istanbul ignore next Simple Method */
    get Tax(): Tax {
        return super.resolve('tax');
    }

    /**
     * Gets an instance of the Usage API
     *
     * @return Usage
     */

    /* istanbul ignore next Simple Method */
    get Usage(): Usage {
        return super.resolve('usage');
    }
}

export default Billing;
