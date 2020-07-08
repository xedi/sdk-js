import User from './User';
import Business from './Business';
import Partnership from "./Partnership";
import DocType from "./DocType";
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

type Models =
    Business
    | DocType
    | Instance
    | Mailbox
    | Partner
    | Partnership
    | Permission
    | Price
    | Product
    | Stage
    | TaxRate
    | Template
    | Transitions
    | User;

interface Collection<T = Models> extends Array<T | Models> {}

export {
    Models,
    Collection,
    User,
    DocType,
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
