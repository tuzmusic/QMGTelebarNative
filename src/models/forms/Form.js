import Product from "../Product";
import Field from "../fields/Field";
import FieldCreator from "../fields/FieldCreator";

// @flow

export default class Form {
  title: string;
  type: string;
  fields: Field[];

  static fromApiProduct(product: Product | Object): Form {
    const form = new Form();
    const info = product.formInfo || product.form_info;
    form.title = info.form_title;
    form.type = info.form_type || info.type; // TO-DO: Standardize this API!
    return form;
  }

  static assembleForm(object: Object): Form {
    const form = new Form();

    form.title = object.form_title;
    form.type = object.form_type; // TO-DO: Standardize this API!
    form.fields = FieldCreator.createFieldsFromArray(object.fields);
    return form;
  }
}
