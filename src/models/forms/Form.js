// @flow

import type Product from "../Product";
// import Field from "../fields/Field";
import FieldCreator from "../fields/FieldCreator";
import TextareaField from "../fields/TextareaField";
import CheckboxesField from "../fields/CheckboxesField";
import SelectboxField from "../fields/SelectboxField";
import HeaderField from "../fields/HeaderField";

type Field = CheckboxesField | SelectboxField | TextareaField | HeaderField;

export default class Form {
  title: string;
  type: string;
  fields: Field[];

  static assembleForm(object: Object): Form {
    const form = new Form();

    form.title = object.form_title;
    form.type = object.form_type;
    form.fields = FieldCreator.createFieldsFromArray(object.fields);
    return form;
  }

  static selectCheckboxesFields(fields: Field[]) {
    return fields
      .map(field => {
        if (!(field instanceof CheckboxesField)) return null;
        return field;
      })
      .filter(Boolean);
  }
}
