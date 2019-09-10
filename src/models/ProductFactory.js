// @flow
import Product from "./Product";
import SubscriptionProduct from "./SubscriptionProduct";
import * as Types from "../redux/ProductTypes";

export default class ProductFactory {
  static collectionFromApiArray(array: Object[]): Types.AllProductCollection {
    const products: Types.AllProductCollection = {};
    array.forEach(p => {
      if (p.type == "simple") return (products[p.id] = Product.fromApi(p));
      if (p.type == "subscription")
        return (products[p.id] = SubscriptionProduct.fromApi(p));
    });
    return products;
  }
}
