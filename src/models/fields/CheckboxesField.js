// @flow
import Field from "./Field";

class CheckboxesField extends Field {
  options: { name: string, price: ?number }[];
  defaultQuantity: number;
  maximumSelections: ?number;

  static fromApiFormInfo(formInfo: Object): CheckboxesField {
    const base = new CheckboxesField();
    const baseField = super.fromApiFormInfo(formInfo);
    const field: CheckboxesField = Object.assign(base, { ...baseField });

    field.defaultQuantity = Number(formInfo.default_quantity);
    field.maximumSelections = formInfo.maximum_selections
      ? Number(formInfo.maximum_selections)
      : null;
    // debugger;

    field.options = formInfo.options.map(opt => ({
      ...opt,
      price: opt.price ? Number(opt.price) : null
    }));

    return field;
  }
}

export default CheckboxesField;
