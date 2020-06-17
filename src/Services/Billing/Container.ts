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

        super.singleton('subscription-item', (app: ContainerInterface, config: Config) => {
            return new SubscriptionItem(
                config,
                app.resolve('client')
            );
        });

    }

    get Config(): Config {
        return super.resolve('config');
    }

    get Logger(): LogManagerInterface {
        return super.resolve('logger');
    }

    get Translator(): Translator {
        return super.resolve('translator');
    }

    get SubscriptionItem(): SubscriptionItem {
        return super.resolve('subscription-item');
    }
}

export default Billing;
