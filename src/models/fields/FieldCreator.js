import SelectboxField from "./SelectboxField";
import CheckboxesField from "./CheckboxesField";
import HeaderField from "./HeaderField";
import TextareaField from "./TextareaField";
import Field from "./Field";

class FieldCreator {
  static createField(formInfo: Object): Field {
    // console.log(formInfo.type);

    switch (formInfo.type) {
      case "textarea":
        return TextareaField.fromApiFormInfo(formInfo);
        break;
      case "header":
        return HeaderField.fromApiFormInfo(formInfo);
        break;
      case "checkboxes":
        return CheckboxesField.fromApiFormInfo(formInfo);
        break;
      case "selectbox":
        return SelectboxField.fromApiFormInfo(formInfo);
        break;
      default:
        return Field.fromApiFormInfo(formInfo);
    }
  }

  static createFieldsFromArray(formInfoArray: Object[]): Field[] {
    return formInfoArray.map(field => this.createField(field));
  }
}

export default FieldCreator;
