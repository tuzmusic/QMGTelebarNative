// @flow
import type { AllProductCollection } from "../redux/ProductTypes";
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
  form: Form;

  /* TO DO
  
  Product.form SHOULD BE A FORM. Fix this here, and all its implications.

  When the product object is created, ALL processing should occur 
    (i.e., nothing should be left as thingInfo: Object, 
      rather, the fromApi method should return a 
      product with thing: Thing)

      This is, admittedly, less performant (since all processing happens at fetch time),
      but I'm okay with that. 

 */

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
    if (apiObj.form_info) prod.form = Form.assembleForm(apiObj.form_info);
    return prod;
  }
}
