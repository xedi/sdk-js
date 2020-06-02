import User from './User';
import Business from './Business';
import Product from './Product';
import Mailbox from './Mailbox';
import Template from './Template';

type Models = User | Business | Mailbox | Product | Template;

interface Collection<T = Models> extends Array<T | Models> {}

export {
    Models,
    Collection,
    User,
    Business,
    Product,
    Mailbox,
    Template,
};
