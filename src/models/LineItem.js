// @flow
import * as Types from "../redux/FormTypes";
import ShopWorker from "./ShopWorker";
import Product from "./Product";
import Createable from "./Createable";

class LineItem extends Createable {
  product: Product; // product or
  quantity: number;
  card: Types.CardSelection
  items: Types.CheckboxesSelection[];

  static fromProductForm(obj: Types.LineItemCreatorObject): LineItem {
    const item = new LineItem();

    return LineItem.create(obj);
  }

  static toOrderApi(lineItem: LineItem): Object {
    // Get simple properties for our object
    const { product, quantity, card, items } = lineItem;
    const obj: ToOrderApiObject = {
      product_id: product.id,
      quantity
    };

    const metaObjects: MetaDataValueObject[] = [];
    const section = "";


    if (items) {
      // EACH item field needs to have a 'name' property
      for (let item of items) {
        const name = item.fieldName;
        if (item.selections && item.selections instanceof Array) {
          // assemble meta object for items
          for (let selection of (item.selections)) {
            const { quantity, price, name: value } = selection;
            metaObjects.push({
              price: (price || 0) * quantity,
              name,
              quantity,
              value,
              section
            });
          }
        }
      }
    }

    if (card) {
      metaObjects.push({
        quantity: 1,
        price: 0,
        value: card.card, // TODO: rename this
        name: card.fieldName,
        section
      });
    }

    obj.meta_data = [
      {
        key: "_tmcartepo_data",
        value: metaObjects
      },
      {
        key: "_tm_epo_product_original_price",
        value: [product.price.toString()]
      }
    ];
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
      meta_data ?: [FormInfoObject, OriginalPriceObject]
        |};

type FormInfoObject = {
  key: "_tmcartepo_data",
  value: MetaDataValueObject[]
};

type OriginalPriceObject = {
  key: "_tm_epo_product_original_price",
  value: [string]
};
