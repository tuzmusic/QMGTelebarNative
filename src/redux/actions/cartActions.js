// @flow
import * as Types from "../CartTypes";
import LineItem from "../../models/LineItem";




export function addItemToCart(item: LineItem): Types.ADD_LINE_ITEM {
  return { type: "ADD_LINE_ITEM", item };
}

export function updateItemInCart(item: LineItem): Types.UPDATE_LINE_ITEM {
  return { type: "UPDATE_LINE_ITEM", item };
}

export function removeItemFromCart(item: LineItem): Types.DELETE_LINE_ITEM {
  return { type: "DELETE_LINE_ITEM", item };
}

export function changeQuantityForItem(
  origItem: LineItem,
  quantity: number
): Types.UPDATE_LINE_ITEM {
  const item = Object.assign(origItem, { quantity });
  return { type: "UPDATE_LINE_ITEM", item };
}
