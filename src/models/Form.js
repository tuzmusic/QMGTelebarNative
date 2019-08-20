// @flow

export default class Form {
  title: string;

  static fromApiProduct(product: Object): Form {
    const form = new Form();
    const info = product.form_info;
    form.title = info.form_title;
    return form;
  }
}
