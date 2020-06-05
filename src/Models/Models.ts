import User from './User';
import Business from './Business';
import Price from './Price';
import Product from './Product';
import Mailbox from './Mailbox';

type Models = User | Business | Mailbox | Product;

interface Collection<T = Models> extends Array<T | Models> {}

export {
    Models,
    Collection,
    User,
    Business,
    Price,
    Product,
    Mailbox,
};
