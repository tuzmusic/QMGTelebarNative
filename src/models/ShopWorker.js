// @flow
import * as Types from "../redux/FormTypes";
import Field from "./fields/Field";
import CheckboxesField from "./fields/CheckboxesField";

export default class ShopWorker {

  /**
   * For each array, returns an object 
   * with a list of selections, and the 
   * name of their field.
  */
  static mappedNamedItemsFromArrayOfLists(
    quantifiedLists: Array<Array<Types.QuantifiedOrderItem>>,
    fields: Array<CheckboxesField>,
  ): Types.CheckboxesSelection[] {
    return quantifiedLists.map((list, i) => this.namedItem(list, fields[i]));
  }

  /** 
   * Returns an object with a list of 
   * selections, and the name of their field.
  */
  /* private */ static namedItem(
    quantifiedList: Array<Types.QuantifiedOrderItem>,
    field: CheckboxesField,
  ): Types.CheckboxesSelection {
    return { selections: quantifiedList, fieldName: field.title };
  }

  static mappedQuantifiedItemListsFromArrayOfLists(
    quantitiesLists: Array<Array<number>>,
    itemsLists: Array<Array<Types.OrderItem>>,
  ): Array<Types.QuantifiedOrderItem[]> {
    if (!quantitiesLists || !itemsLists) return [];
    return quantitiesLists.map(
      (list, i) => this.quantifiedItemList(list, itemsLists[i]),
    );
  }

  /* private */ static quantifiedItemList(
    quantities: Array<number>,
    items: Array<Types.OrderItem>,
  ): Array<Types.QuantifiedOrderItem> {
    if (!items) return [];
    return items.map(
      (item: Types.OrderItem, i: number) => ({
        ...item,
        quantity: quantities[i],
      }),
    ).filter(item => item.quantity > 0);
  }

  static totalPrice(
    items: Types.CheckboxesSelection[] | Types.CheckboxesSelection
    // items:
    //   | Types.QuantifiedOrderItem
    //   | Types.QuantifiedOrderItem[],
  ): number {
    if (!items) return 0;
    let allSelections = [];
    if (items instanceof Array) {
      allSelections = items.flatMap(item => item.selections);
    } else {
      allSelections = items.selections;
    }
    let total = 0;
    allSelections.forEach(item => total += (item.price || 0) * item.quantity);
    return total;
  }
}
