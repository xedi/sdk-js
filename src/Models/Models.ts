import Batch from "./Batch";
import Business from './Business';
import Card from './Card';
import Customer from "./Customer";
import DocumentType from "./DocumentType";
import Document from "./Document";
import DocumentGroup from "./DocumentGroup";
import DocumentSetting from "./DocumentSetting";
import Event from './Event';
import Field from "./Field";
import File from './File';
import Group from './Group';
import Instance from './Instance';
import Invoice from "./Invoice";
import InvoiceItem from "./InvoiceItem";
import Layout from "./Layout";
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
import Schema from "./Schema";
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
import Location from './Location';
import BusinessType from './BusinessType';
import UnleashedCustomer from './UnleashedCustomer';
import ScheduledJob from './ScheduledJob';
import TradeInvite from "./TradeInvite";
import TaskStatus from "./TaskStatus";
import ExternalRequestLog from "./ExternalRequestLog";

type Models =
    Batch
    | Business
    | Card
    | Customer
    | DocumentType
    | Document
    | DocumentGroup
    | DocumentSetting
    | Event
    | Field
    | File
    | Group
    | Instance
    | Invoice
    | InvoiceItem
    | Layout
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
    | Schema
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
    | Password
    | Location
    | BusinessType
    | UnleashedCustomer
    | ScheduledJob
    | TradeInvite
    | TaskStatus
    | ExternalRequestLog;

interface Collection<T = Models> extends Array<T | Models> {
}

export {
    Batch,
    Business,
    Card,
    Collection,
    Customer,
    DocumentType,
    Document,
    DocumentGroup,
    DocumentSetting,
    Event,
    Field,
    File,
    Group,
    Instance,
    Invoice,
    InvoiceItem,
    Layout,
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
    Schema,
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
    Password,
    Location,
    BusinessType,
    UnleashedCustomer,
    ScheduledJob,
    TradeInvite,
    TaskStatus,
    ExternalRequestLog
};
