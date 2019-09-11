// @flow
import * as Types from "../redux/FormTypes";

export default class ShopWorker {
  static quantifiedItemList({
    quantities,
    items
  }: {
    quantities: number[],
    items: Types.OrderItem[]
  }): Types.QuantifiedOrderItem[] {
    if (!items) return [];
    return items
      .map((item: Types.OrderItem, i: number) => ({
        ...item,
        quantity: quantities[i]
      }))
      .filter(item => item.quantity > 0);
  }

  static totalPrice(items: Types.QuantifiedOrderItem[]): number {
    let total = 0;
    items.forEach(item => (total += (item.price || 0) * item.quantity));
    return total;
  }
}
