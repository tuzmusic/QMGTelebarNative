// @flow
import LineItem from "../models/LineItem";

export type LineItemCollection = { [number]: LineItem };

export type CartState = {
  lineItems: LineItemCollection
};

export type ADD_LINE_ITEM = { type: "ADD_LINE_ITEM", item: LineItem };
export type UPDATE_LINE_ITEM = { type: "UPDATE_LINE_ITEM", item: LineItem };
export type DELETE_LINE_ITEM = { type: "DELETE_LINE_ITEM", item: LineItem };

export type CartAction = ADD_LINE_ITEM | UPDATE_LINE_ITEM | DELETE_LINE_ITEM;
