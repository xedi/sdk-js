import Batch from "./Batch";
import Business from './Business';
import Card from './Card';
import Customer from "./Customer";
import DocType from "./DocType";
import Document from "./Document";
import DocumentGroup from "./DocumentGroup";
import DocumentSetting from "./DocumentSetting";
import Event from './Event';
import Group from './Group';
import Instance from './Instance';
import Invoice from "./Invoice";
import InvoiceItem from "./InvoiceItem";
import Mailbox from './Mailbox';
import Mapping from "./Mapping";
import MappingCollection from "./MappingCollection";
import NetworkConfiguration from "./NetworkConfiguration";
import NetworkConnection from "./NetworkConnection";
import Notification from "./Notification";
import Partner from "./Partner";
import Partnership from "./Partnership";
import Plan from './Plan';
import Permission from './Permission';
import PolicyAcceptance from './PolicyAcceptance';
import Price from './Price';
import Product from './Product';
import Setting from "./Setting";
import Stage from './Stage';
import StripeProduct from "./StripeProduct";
import StripeTax from "./StripeTax";
import Subscription from './Subscription';
import SubscriptionItem from './SubscriptionItem';
import TaxRate from './TaxRate';
import Template from './Template';
import Transition from './Transition';
import Usage from './Usage';
import User from './User';
import MailingList from './MailingList';
import BusinessInvite from './BusinessInvite';
import Password from './Password';

type Models =
    Batch
    | Business
    | Card
    | Customer
    | DocType
    | Document
    | DocumentGroup
    | DocumentSetting
    | Event
    | Group
    | Instance
    | Invoice
    | InvoiceItem
    | Mailbox
    | Mapping
    | MappingCollection
    | NetworkConfiguration
    | NetworkConnection
    | Notification
    | Partner
    | Partnership
    | Permission
    | Plan
    | PolicyAcceptance
    | Price
    | Product
    | Setting
    | Stage
    | StripeProduct
    | StripeTax
    | Subscription
    | SubscriptionItem
    | TaxRate
    | Template
    | Transition
    | Usage
    | User
    | MailingList
    | BusinessInvite
    | Password;

interface Collection<T = Models> extends Array<T | Models> {
}

export {
    Batch,
    Business,
    Card,
    Collection,
    Customer,
    DocType,
    Document,
    DocumentGroup,
    DocumentSetting,
    Event,
    Group,
    Instance,
    Invoice,
    InvoiceItem,
    Mailbox,
    Mapping,
    MappingCollection,
    Models,
    NetworkConfiguration,
    NetworkConnection,
    Notification,
    Partner,
    Partnership,
    Permission,
    Plan,
    PolicyAcceptance,
    Price,
    Product,
    Setting,
    Stage,
    StripeProduct,
    StripeTax,
    Subscription,
    SubscriptionItem,
    TaxRate,
    Template,
    Transition,
    Usage,
    User,
    MailingList,
    BusinessInvite,
    Password
};
