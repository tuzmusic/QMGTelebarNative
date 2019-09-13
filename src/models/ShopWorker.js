// @flow
import * as Types from "../redux/FormTypes";
import Field from "./fields/Field";
import CheckboxesField from "./fields/CheckboxesField";

export default class ShopWorker {
  static mappedNamedItemsFromArrayOfLists(
    quantifiedLists: Array<Types.QuantifiedOrderItem[]>,
    fields: CheckboxesField[]
  ): Types.CheckboxesSelection[] {
    return quantifiedLists.map((list, i) => this.namedItem(list, fields[i]));
  }

  static namedItem(
    quantifiedList: Types.QuantifiedOrderItem[],
    field: CheckboxesField
  ): Types.CheckboxesSelection {
    return {
      selections: quantifiedList,
      fieldName: field.title
    };
  }

  static mappedQuantifiedItemsFromArrayOfLists(
    quantitiesLists: Array<number[]>,
    itemsLists: Array<Types.OrderItem[]>
  ): Array<Types.QuantifiedOrderItem[]> {
    if (!quantitiesLists || !itemsLists) return [];
    return quantitiesLists.map((list, i) =>
      this.quantifiedItemList(list, itemsLists[i])
    );
  }

  static quantifiedItemList(
    quantities: number[],
    items: Types.OrderItem[]
  ): Types.QuantifiedOrderItem[] {
    if (!items) return [];
    return items
      .map((item: Types.OrderItem, i: number) => ({
        ...item,
        quantity: quantities[i]
      }))
      .filter(item => item.quantity > 0);
  }

  static totalPrice(items: Types.QuantifiedOrderItem[]): number {
    if (!items) return 0;
    let total = 0;
    items.forEach(item => (total += (item.price || 0) * item.quantity));
    return total;
  }
}
