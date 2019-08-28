// @flow
import Field from "./Field";

class HeaderField extends Field {
  static fromApiFormInfo(formInfo: Object): HeaderField {
    const base = new HeaderField();
    const baseField = super.fromApiFormInfo(formInfo);
    const field: HeaderField = Object.assign(base, { ...baseField });
    return field;
  }
}

export default HeaderField;
