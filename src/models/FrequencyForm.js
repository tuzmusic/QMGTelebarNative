// @flow
import Form from "./Form";
import Product from "./Product";

type FrequencyFormOption = { frequency: string, price: number };

export default class FrequencyForm extends Form {
  options: FrequencyFormOption[];

  static fromApiProduct(obj: Object): FrequencyForm {
    const base = new FrequencyForm();
    const baseForm = Form.fromApiProduct(obj);
    const form = Object.assign(base, { ...baseForm });
    const info = obj.formInfo || obj.form_info;

    form.options = info.options.map(o => {
      const { frequency, price } = o;
      return { frequency, price: Number(price) };
    });

    return form;
  }
}
