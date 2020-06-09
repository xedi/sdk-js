import User from './User';
import Business from './Business';
import Product from './Product';
import Mailbox from './Mailbox';
import Template from './Template';
import Transitions from './Transition';
import Instance from './Instance';
import Stage from './Stage';

type Models = User | Business | Mailbox | Product | Template | Transitions | Stage | Instance;

interface Collection<T = Models> extends Array<T | Models> {}

export {
    Models,
    Collection,
    User,
    Business,
    Product,
    Mailbox,
    Template,
    Transitions,
    Instance,
    Stage
};
