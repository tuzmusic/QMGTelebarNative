// @flow
import * as Types from "../redux/FormTypes";
import ShopWorker from "./ShopWorker";
import Product from "./Product";

type CardSelection = {
  card: string,
  fieldName: string
};

type CheckboxesSelection = {
  selections: Types.QuantifiedOrderItem[],
  fieldName: string
};

type OrderSelection = CardSelection | CheckboxesSelection;

class LineItem {
  product: Product;
  quantity: number;
  items: OrderSelection[];

  static toOrderApi(lineItem: LineItem): Object {
    const { product, quantity } = lineItem;
    const obj: ToOrderApiObject = {
      product_id: product.id,
      quantity
    };

    if (lineItem.items) {
      const values: MetaDataValueObject[] = [];

      for (let item of lineItem.items) {
        /* 
          const value = {};
          value.name = null;
          value.value = null;
          value.price = null;
          value.section = "";
          value.quantity = null;
         */

        if (item.card && typeof item.card == "string") {
          values.push({
            quantity: 1,
            price: 0,
            name: item.fieldName,
            value: item.card,
            section: ""
          }); // hold off on this flow error until the test passes
        } else if (item.selections) {
          const selections: Types.QuantifiedOrderItem[] = item.selections; // hold off on this flow error until the test passes

          for (let selection of selections) {
            const { quantity, price, name } = selection;
            values.push({
              quantity,
              price: (price || 0) * quantity,
              name: item.fieldName,
              value: name,
              section: ""
            });
          }
        }
      }

      const formInfo: FormInfoObject = {
        key: "_tmcartepo_data",
        value: values
      };

      const origPriceInfo: OriginalPriceObject = {
        key: "_tm_epo_product_original_price",
        value: [product.price.toString()]
      };

      obj.meta_data = [formInfo, origPriceInfo];
    }
    return obj;
  }
}

export default LineItem;

type MetaDataValueObject = {
  name: string,
  value: string,
  price: number,
  section: "",
  quantity: number
};

type ToOrderApiObject = {|
  product_id: number,
  quantity: number,
  meta_data?: [FormInfoObject, ?OriginalPriceObject]
|};

type FormInfoObject = {
  key: "_tmcartepo_data",
  value: MetaDataValueObject[]
};

type OriginalPriceObject = {
  key: "_tm_epo_product_original_price",
  value: [string]
};
