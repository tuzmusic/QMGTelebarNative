// @flow
import Field from "../models/fields/Field";
import Product from "../models/Product";

/* USED BY FORMS */
export type ProductFormSelection = {
  card: ?Card,
  items: QuantifiedOrderItem[]
};

export type Card = {
  message: ?string,
  field: ?Field
};

export type OrderItem = { name: string, price: ?number };
export type NamedOrderItem = {
  name: string,
  price: ?number,
  fieldName: string
};

export type NamedItemList = {
  items: QuantifiedOrderItem[],
  fieldName: string
};

export type QuantifiedOrderItem = { ...OrderItem, quantity: number };
export type QuantifiedNamedOrderItem = { ...NamedOrderItem, quantity: number };

/* USED BY LineItem */

export type CardSelection = {
  card: string,
  fieldName: string
};

export type CheckboxesSelection = {
  selections: QuantifiedOrderItem[],
  fieldName: string
};

export type OrderSelection = CardSelection | CheckboxesSelection;

// AKA "CartObject"
export type LineItemCreatorObject = {
  product: Product,
  quantity: number,
  items?: OrderSelection[]
};
