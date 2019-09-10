// @flow
import type { ProductCollection } from "../redux/ProductTypes";
import Form from "./forms/Form";
export default class Product {
  // #region TYPE PROPERTY DEFINITIONS
  id: number;
  name: string;
  type: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  images: { id?: number, src: string, name?: string, alt?: string }[];
  formInfo: Object;

  // #endregion

  static fromApi(apiObj: Object): Product {
    const prod = new Product();

    prod.id = apiObj.id;
    prod.name = apiObj.name;
    prod.type = apiObj.type;
    prod.slug = apiObj.slug;
    if (apiObj.description) prod.description = apiObj.description;

    if (apiObj.short_description)
      prod.shortDescription = apiObj.short_description;
    prod.price = Number(apiObj.price);
    prod.images = apiObj.images || [
      {
        src: apiObj.featured_image_url
      }
    ];
    prod.formInfo = Form.assembleForm(apiObj.form_info);
    return prod;
  }

  static collectionFromApiArray(array: Object[]): ProductCollection {
    const products: ProductCollection = {};
    array.forEach(p => (products[p.id] = Product.fromApi(p)));
    return products;
  }
}
