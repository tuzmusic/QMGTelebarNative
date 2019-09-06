// @flow
import Field from "../models/fields/Field";

export type SubscriptionFormState = {
  card: ?Card,
  items: OrderItem[]
};

export type Card = {
  message: ?string,
  field: ?Field
};

export type OrderItem = { name: string, price: ?number, quantity: number };
