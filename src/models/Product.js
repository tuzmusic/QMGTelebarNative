// @flow
import html from "html-to-text";
import type { ProductCollection } from "../redux/ProductTypes";

export default class Product {
  // #region TYPE PROPERTY DEFINITIONS
  id: number;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  images: { id: number, src: string, name: string, alt: string }[];

  /* UNUSED
  sku: string;
  regularPrice: number;
  salePrice: ?number;
  onSale: boolean;
  relatedIds: number[];
  featured: boolean;
  categories: { id: number, name: string, slug: string }[];
  tags: { id: number, name: string, slug: string }[];
  attributes: {
    id: number,
    name: string,
    position: number,
    visible: boolean,
    variation: boolean,
    options: string[]
  }[];
 */

  // #endregion

  static fromApi(apiObj: Object): Product {
    const prod = new Product();

    const fromHtml = str => html.fromString(str, { wordwrap: false });
    prod.id = apiObj.id;
    prod.name = apiObj.name;
    prod.slug = apiObj.slug;
    prod.description = fromHtml(apiObj.description);
    prod.shortDescription = fromHtml(apiObj.short_description);
    prod.price = Number(apiObj.price);
    prod.images = apiObj.images || [
      {
        src: apiObj.featured_image_url
      }
    ];
    /* UNUSED
    prod.sku = apiObj.sku;
    prod.regularPrice = Number(apiObj.regular_price);
    prod.salePrice = Number(apiObj.sale_price) || null;
    prod.onSale = apiObj.on_sale;
    prod.relatedIds = apiObj.related_ids;
    prod.featured = apiObj.featured;
    prod.categories = apiObj.categories;
    prod.tags = apiObj.tags;
    prod.attributes = apiObj.attributes; */
    return prod;
  }

  static collectionFromApiArray(array: Object[]): ProductCollection {
    const products: ProductCollection = {};
    array.forEach(p => (products[p.id] = Product.fromApi(p)));
    return products;
  }
}
