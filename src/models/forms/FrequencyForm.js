// @flow
import Form from "./Form";
import Product from "../Product";

export type FrequencyFormOption = {
  frequency: string,
  price: number,
  type: "option"
};

export default class FrequencyForm extends Form {
  fields: { type: "options", options: FrequencyFormOption[] };
  options: FrequencyFormOption[];

  static fromApiProduct(obj: Object): FrequencyForm {
    const base = new FrequencyForm();
    const baseForm = Form.fromApiProduct(obj);
    const form = Object.assign(base, { ...baseForm });
    const info = obj.formInfo || obj.form_info;
    form.fields = info.fields.map(field => {
      const options = field.options.map(opt => ({
        ...opt,
        price: Number(opt.price)
      }));
      return { ...field, options };
    });
    return form;
  }
}
