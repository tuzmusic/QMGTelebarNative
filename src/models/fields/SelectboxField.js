// @flow
import Field from "./Field";

class SelectboxField extends Field {
  placeholder: string;
  options: string[];
  static fromApiFormInfo(formInfo: Object): SelectboxField {
    const base = new SelectboxField();
    const baseField = super.fromApiFormInfo(formInfo);
    const field: SelectboxField = Object.assign(base, { ...baseField });
    field.options = formInfo.options;
    field.placeholder = formInfo.placeholder_text;

    return field;
  }
}

export default SelectboxField;
