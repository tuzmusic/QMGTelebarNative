// @flow
import Field from "../models/fields/Field";
import Product from "../models/Product";

/* USED BY FORMS */

export type Card = {
  message: ?string,
  field: ?Field
};

// Items
export type OrderItem = { name: string, price: ?number };

export type QuantifiedOrderItem = { ...OrderItem, quantity: number };

// Collection
export type ProductFormSelection = {
  card: ?Card,
  items: {
    items: QuantifiedOrderItem[],
    fieldName: string
  }[]
};

/* USED BY LineItem */

export type CardSelection = {
  card: string,
  fieldName: string
};

export type CheckboxesSelection = {
  selections: QuantifiedOrderItem[],
  fieldName: string
};

// AKA "CartObject"
export type LineItemCreatorObject = {
  product: Product,
  quantity: number,
  items?: { // CheckboxesSelection[]
    selections: QuantifiedOrderItem[],
    fieldName: string
  }[],
  card: ?{ // ?CardSelection
    card: string,
    fieldName: string
  }
};
