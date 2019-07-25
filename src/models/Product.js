// @flow
import html from "html-to-text";

export type ProductCollection = { [number]: Product };

export default class Product {
  // #region TYPE PROPERTY DEFINITIONS
  id: number;
  name: string;
  slug: string;
  featured: boolean;
  description: string;
  shortDescription: string;
  sku: string;
  price: number;
  regularPrice: number;
  salePrice: ?number;
  onSale: boolean;
  relatedIds: number[];
  categories: { id: number, name: string, slug: string }[];
  images: { id: number, src: string, name: string, alt: string }[];
  attributes: {
    id: number,
    name: string,
    position: number,
    visible: boolean,
    variation: boolean,
    options: string[]
  }[];
  // #endregion

  constructor(json: Object) {
    this.id = json.id;
    this.name = json.name;
    this.slug = json.slug;
    this.featured = json.featured;
    this.description = json.description;
    this.shortDescription = json.shortDescription;
    this.sku = json.sku;
    this.price = json.price;
    this.regularPrice = json.regularPrice;
    this.salePrice = json.salePrice;
    this.onSale = json.onSale;
    this.relatedIds = json.relatedIds;
    this.categories = json.categories;
    this.images = json.images;
    this.attributes = json.attributes;
  }

  static fromApi(apiJson: Object): Object {
    const {
      id,
      name,
      slug,
      featured,
      sku,
      categories,
      images,
      tags,
      attributes
    } = apiJson;

    const description = html.fromString(apiJson.description, {
      wordwrap: false
    });
    const shortDescription = html.fromString(apiJson.short_description, {
      wordwrap: false
    });

    let json: Object = {
      id,
      name,
      slug,
      featured,
      description,
      shortDescription,
      sku,
      price: Number(apiJson.price),
      regularPrice: Number(apiJson.regular_price),
      salePrice: Number(apiJson.sale_price) || null,
      onSale: apiJson.on_sale,
      relatedIds: apiJson.related_ids,
      categories,
      images,
      tags,
      attributes
    };
    return json;
  }
  static collectionFromApiArray(array: Object[]): ProductCollection {
    const products: ProductCollection = {};
    array.forEach(p => (products[p.id] = Product.fromApi(p)));
    return products;
  }
}
