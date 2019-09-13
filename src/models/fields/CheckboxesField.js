// @flow
import Field from "./Field";
import * as Types from "../../redux/FormTypes";

class CheckboxesField extends Field {
  options: Types.OrderItem[];
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
