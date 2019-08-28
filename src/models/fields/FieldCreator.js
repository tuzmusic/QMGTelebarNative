import SelectboxField from "./SelectboxField";
import CheckboxesField from "./CheckboxesField";
import HeaderField from "./HeaderField";
import TextareaField from "./TextareaField";
import Field from "./Field";

class FieldCreator {
  static createField(formInfo: Object): Field {
    switch (formInfo.type) {
      case "textarea":
        return TextareaField.fromApiFormInfo(formInfo);
      case "header":
        return HeaderField.fromApiFormInfo(formInfo);
      case "checkboxes":
        return CheckboxesField.fromApiFormInfo(formInfo);
      case "selectbox":
        return SelectboxField.fromApiFormInfo(formInfo);
      default:
        return Field.fromApiFormInfo(formInfo);
    }
  }
}

export default FieldCreator;
