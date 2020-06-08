import User from './User';
import Business from './Business';
import Product from './Product';
import Mailbox from './Mailbox';
import Template from './Template';
import Transitions from './Transition';

type Models = User | Business | Mailbox | Product | Template | Transitions;

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
};
