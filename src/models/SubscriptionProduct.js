// @flow
import type { ProductCollection } from "../redux/ProductTypes";
import Product from "./Product";

export default class SubscriptionProduct extends Product {
  subscriptionInfo: {
    price: number,
    period: string,
    interval: number
  };

  static fromApi(obj: ProductCollection): SubscriptionProduct {
    const sp = new SubscriptionProduct();
    const p = super.fromApi(obj);
    const prod = Object.assign(sp, { ...p });
    prod.price = Number(obj.price);
    prod.images = obj.images || [
      {
        src: obj.featured_image_url
      }
    ];

    prod.subscriptionInfo = {
      price: Number(obj.price),
      interval: Number(obj.interval),
      period: obj.period
    };

    return prod;
  }
}
