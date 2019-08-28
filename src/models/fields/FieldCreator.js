import SelectboxField from "./SelectboxField";
import CheckboxesField from "./CheckboxesField";
import HeaderField from "./HeaderField";
import TextareaField from "./TextareaField";

class FieldCreator {
  static createField(formInfo: Object): Field {
    switch (formInfo.type) {
      case "textarea":
        return TextareaField.fromApiFormInfo(formInfo);
      case "header":
        return HeaderField.fromApiFormInfo(formInfo);
      case "checkboxes":
        return CheckboxesField.fromApiFormInfo(formInfo);
      case "selectboxes":
        return SelectboxField.fromApiFormInfo(formInfo);
      default:
        return Field.fromApiFormInfo(formInfo);
    }
  }
}

export default FieldCreator;
