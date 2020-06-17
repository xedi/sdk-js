import User from './User';
import Business from './Business';
import Partnership from "./Partnership";
import Price from './Price';
import Partner from "./Partner";
import Product from './Product';
import Mailbox from './Mailbox';
import Permission from './Permission';
import Template from './Template';
import Transitions from './Transition';
import Instance from './Instance';
import Stage from './Stage';
import TaxRate from './TaxRate';

type Models = User | Business | Mailbox | Product | Template | Transitions | Stage | Instance | Permission | Partner | Partnership;

interface Collection<T = Models> extends Array<T | Models> {}

export {
    Models,
    Collection,
    User,
    Business,
    Partner,
    Permission,
    Partnership,
    Price,
    Product,
    TaxRate,
    Mailbox,
    Template,
    Transitions,
    Instance,
    Stage
};
