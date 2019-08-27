import Product from "../Product";

// @flow

export default class Form {
  title: string;
  type: string;

  static fromApiProduct(product: Product | Object): Form {
    const form = new Form();
    const info = product.formInfo || product.form_info;
    form.title = info.form_title;
    form.type = info.form_type || info.type; // TO-DO: Standardize this API!
    return form;
  }
}
