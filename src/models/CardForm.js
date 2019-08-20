// @flow
import Form from "./Form";
import Product from "./Product";

export type CardFormSelectField = {
  title: string,
  placeholder: string,
  options: string[]
};

export default class CardForm extends Form {
  textAreaTitle: string;
  fields: CardFormSelectField[];

  static fromApiProduct(obj: Object): CardForm {
    const base = new CardForm();
    const baseForm = Form.fromApiProduct(obj);
    const form = Object.assign(base, { ...baseForm });

    // allows this to be called with a direct API product response (an Object with a form_info prop) or on a Product (with a formInfo prop) that we can treat like an Object (pojo)
    const info = obj.formInfo || obj.form_info;

    form.textAreaTitle = info.text_area_title;

    form.fields = info.selection_fields.map(f => {
      const { title, placeholder_text, options } = f;
      return { title, options, placeholder: placeholder_text };
    });

    return form;
  }
}
