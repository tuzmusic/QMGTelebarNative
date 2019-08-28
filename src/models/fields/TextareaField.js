// @flow
import Field from "./Field";

class TextareaField extends Field {
  static fromApiFormInfo(formInfo: Object): TextareaField {
    const base = new TextareaField();
    const baseField = super.fromApiFormInfo(formInfo);
    const field: TextareaField = Object.assign(base, { ...baseField });
    return field;
  }
}

export default TextareaField;
