// @flow

class Field {
  title: string;
  type: string;

  static fromApiFormInfo(formInfo: Object): Field {
    const field = new Field();
    field.title = formInfo.title;
    field.type = formInfo.type;
    return field;
  }
}

export default Field;
