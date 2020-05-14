import User from './User';
import Business from './Business';

type Models = User | Business;
interface Collection<T = Models> extends Array<T | Models> {}

export {
    Models,
    Collection,
    User,
    Business
};