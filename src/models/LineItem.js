// @flow
import * as Types from "../redux/FormTypes";
import ShopWorker from "./ShopWorker";
import Product from "./Product";
import Createable from "./Createable";

class LineItem extends Createable {
  product: Product; // product or
  quantity: number;
  items: Types.OrderSelection[];

  static fromProductForm(obj: Types.LineItemCreatorObject): LineItem {
    const item = new LineItem();

    return Object.assign(item, obj);
  }

  static toOrderApi(lineItem: LineItem): Object {
    const { product, quantity } = lineItem;
    const obj: ToOrderApiObject = {
      product_id: product.id,
      quantity
    };

    if (lineItem.items) {
      const items: MetaDataValueObject[] = [];
      const section = "";
      for (let item of lineItem.items) {
        const name = item.fieldName;
        if (item.card && typeof item.card == "string") {
          items.push({
            quantity: 1,
            price: 0,
            value: item.card,
            name,
            section
          });
        } else if (item.selections && item.selections instanceof Array) {
          for (let selection of (item.selections: Types.QuantifiedOrderItem[])) {
            const { quantity, price, name: value } = selection;
            items.push({
              price: (price || 0) * quantity,
              name,
              quantity,
              value,
              section
            });
          }
        }
      }

      obj.meta_data = [
        {
          key: "_tmcartepo_data",
          value: items
        },
        {
          key: "_tm_epo_product_original_price",
          value: [product.price.toString()]
        }
      ];
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
  meta_data?: [FormInfoObject, OriginalPriceObject]
|};

type FormInfoObject = {
  key: "_tmcartepo_data",
  value: MetaDataValueObject[]
};

type OriginalPriceObject = {
  key: "_tm_epo_product_original_price",
  value: [string]
};
