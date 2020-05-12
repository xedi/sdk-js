import User from './User';
import Business from './Business';

type Models = User | Business;
type Collection<T = Models> = Array<T | Models>;

export {
    Models,
    Collection,
    User,
    Business
};