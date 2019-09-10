// @flow
import type { ProductCollection } from "../redux/ProductTypes";
import Product from "./Product";

export default class SubscriptionProduct extends Product {
  subscriptionInfo: {
    price: number,
    period: string,
    interval: number
  };

  static fromApi(obj: Object): SubscriptionProduct {
    const sp = new SubscriptionProduct();
    const p = super.fromApi(obj);
    const prod = Object.assign(sp, { ...p });

    prod.subscriptionInfo = {
      price: Number(obj.price),
      interval: Number(obj.interval),
      period: obj.period
    };

    return prod;
  }
}
