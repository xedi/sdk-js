import User from './User';
import Business from './Business';
import Product from './Product';

type Models = User | Business | Product;
interface Collection<T = Models> extends Array<T | Models> {}

export {
    Models,
    Collection,
    User,
    Business,
    Product,
};
