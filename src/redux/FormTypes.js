// @flow
import Field from "../models/fields/Field";

export type FormState = {
  +card: ?Card,
  +items: OrderItem[]
};

export type Card = {
  message: string,
  field: Field
};

export type OrderItem = { name: string, price: number, quantity: number };

export type SET_CARD = { type: "SET_CARD", card: Card };

export type FormAction = SET_CARD;
