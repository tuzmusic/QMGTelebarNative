// @flow
import Form from "../../src/models/forms/Form";
import { products } from "../../__mocks__/products-response";
import FieldCreator from "../../src/models/fields/FieldCreator";
import CheckboxesField from "../../src/models/fields/CheckboxesField";
import SelectboxField from "../../src/models/fields/SelectboxField";
import HeaderField from "../../src/models/fields/HeaderField";
import TextareaField from "../../src/models/fields/TextareaField";

function expectedBasicForm(): Form {
  const form = new Form();

  form.title =
    "Pick one of the following gift card messages or write your own custom message!";
  form.type = "card";

  return form;
}

const { checkboxesObj, selectboxObj, headerObj, textareaObj } = fieldObjects();
const { checkboxes, selectbox, header, textarea } = expectedFields();
describe("FieldCreator", () => {
  it("generically creates a checkboxes field", () => {
    expect(FieldCreator.createField(checkboxesObj)).toEqual(checkboxes);
  });
  it("generically creates a selectbox field", () => {
    expect(FieldCreator.createField(selectboxObj)).toEqual(selectbox);
  });
  it("generically creates a textarea field", () => {
    expect(FieldCreator.createField(textareaObj)).toEqual(textarea);
  });
  it("generically creates a header field", () => {
    expect(FieldCreator.createField(headerObj)).toEqual(header);
  });
});
function fieldObjects(): Object {
  const fieldObjects = {};

  fieldObjects.checkboxesObj = {
    type: "checkboxes",
    title:
      "Choose 4 separate or mix and match candy to began placing your order",
    maximum_selections: "4",
    default_quantity: "1",
    options: [{ name: "Butterfinger", price: "" }, { name: "Twix", price: "5" }]
  };
  fieldObjects.selectboxObj = {
    type: "selectbox",
    title: "Add a Birthday Gift Card",
    placeholder_text: "Choose a Card",
    options: [
      "There are two great days in a person's life - the day we are born and the day we discover why. -William Barclay",
      "Today you are you! That is truer than true! There is no one alive who is you-er than you! -Dr. Seuss"
    ]
  };
  fieldObjects.headerObj = {
    type: "header",
    title:
      "Pick one of the following gift card messages or write your own custom message!"
  };
  fieldObjects.textareaObj = {
    type: "textarea",
    title: "Write a custom message to display on the gift card"
  };
  return fieldObjects;
}

function expectedFields(): Object {
  const expectedFields = {};
  const checkboxes = {
    type: "checkboxes",
    title:
      "Choose 4 separate or mix and match candy to began placing your order",
    maximumSelections: 4,
    defaultQuantity: 1,
    options: [{ name: "Butterfinger", price: null }, { name: "Twix", price: 5 }]
  };
  expectedFields.checkboxes = Object.assign(new CheckboxesField(), checkboxes);
  const selectbox = {
    type: "selectbox",
    title: "Add a Birthday Gift Card",
    placeholder: "Choose a Card",
    options: [
      "There are two great days in a person's life - the day we are born and the day we discover why. -William Barclay",
      "Today you are you! That is truer than true! There is no one alive who is you-er than you! -Dr. Seuss"
    ]
  };
  expectedFields.selectbox = Object.assign(new SelectboxField(), selectbox);

  const header = {
    type: "header",
    title:
      "Pick one of the following gift card messages or write your own custom message!"
  };
  expectedFields.header = Object.assign(new HeaderField(), header);

  const textarea = {
    type: "textarea",
    title: "Write a custom message to display on the gift card"
  };
  expectedFields.textarea = Object.assign(new TextareaField(), textarea);

  return expectedFields;
}

describe("creating a whole form", () => {
  describe("Form.assembleForm", () => {
    it("assembles a form from its fields (agnostic about how the fields work together or what type of form it is", () => {
      expect(Form.assembleForm(formObject())).toEqual(expectedAssembledForm());
    });
  });
});

function formObject(): Object {
  const {
    checkboxesObj,
    selectboxObj,
    headerObj,
    textareaObj
  } = fieldObjects();
  return {
    form_title: "Placeholder title for subscription product",
    form_type: "Placeholder type for subscription product",
    fields: [checkboxesObj, selectboxObj, headerObj, textareaObj]
  };
}
function expectedAssembledForm(): Form {
  const { checkboxes, selectbox, header, textarea } = expectedFields();
  const form = {
    title: "Placeholder title for subscription product",
    type: "Placeholder type for subscription product",
    fields: [checkboxes, selectbox, header, textarea]
  };
  return Object.assign(new Form(), form);
}
