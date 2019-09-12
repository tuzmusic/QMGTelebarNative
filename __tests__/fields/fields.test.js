import Field from "../../src/models/fields/Field";
import CheckboxesField from "../../src/models/fields/CheckboxesField";
import SelectboxField from "../../src/models/fields/SelectboxField";
import TextareaField from "../../src/models/fields/TextareaField";
import HeaderField from "../../src/models/fields/HeaderField";

// @flow

const simpleObj = { title: "something", type: "general" };

describe("Field superclass", () => {
  it("constructs a simple field", () => {
    expect(Field.fromApiFormInfo(simpleObj)).toEqual(expectedSimpleField());
  });
});

describe("CheckboxesField", () => {
  const checkboxObj = {
    type: "checkboxes",
    title:
      "Choose 4 separate or mix and match candy to began placing your order",
    maximum_selections: "4",
    default_quantity: "1",
    options: [{ name: "Butterfinger", price: "" }, { name: "Twix", price: "" }]
  };
  it("constructs a checkboxes field with no prices, and with a maximum selections value", () => {
    expect(CheckboxesField.fromApiFormInfo(checkboxObj)).toEqual(
      expectedCheckboxesField()
    );
  });
  it("constructs a checkboxes field with prices", () => {
    const optionsWithPricesObj = [
      { name: "Butterfinger", price: "5" },
      { name: "Twix", price: "5" }
    ];
    const optionsWithPrices = [
      { name: "Butterfinger", price: 5 },
      { name: "Twix", price: 5 }
    ];
    const objWithPrices = { ...checkboxObj, options: optionsWithPricesObj };
    const expectedWithPrices: CheckboxesField = {
      ...expectedCheckboxesField(),
      options: optionsWithPrices
    };

    expect(CheckboxesField.fromApiFormInfo(objWithPrices)).toEqual(
      expectedWithPrices
    );
  });

  it("constructs a checkboxes field with no maximum value", () => {
    const noMaxObj = { ...checkboxObj, maximum_selections: "" };
    const noMaxField = {
      ...expectedCheckboxesField(),
      maximumSelections: null
    };
    expect(CheckboxesField.fromApiFormInfo(noMaxObj)).toEqual(noMaxField);
  });
});

describe("SelectboxField", () => {
  const selectObj = {
    type: "selectbox",
    title: "Add a Birthday Gift Card",
    placeholder_text: "Choose a Card",
    options: [
      "There are two great days in a person's life - the day we are born and the day we discover why. -William Barclay",
      "Today you are you! That is truer than true! There is no one alive who is you-er than you! -Dr. Seuss"
    ]
  };

  it("constructs a selectbox field", () => {
    expect(SelectboxField.fromApiFormInfo(selectObj)).toEqual(
      expectedSelectboxField()
    );
  });
});

describe("TextareaField and HeaderField", () => {
  it("should construct a TextareaField", () => {
    const expTextField: TextareaField = {
      ...new TextareaField(),
      ...expectedSimpleField()
    };
    expect(TextareaField.fromApiFormInfo(simpleObj)).toEqual(expTextField);
  });
  it("should construct a HeaderField", () => {
    const expTextField: HeaderField = {
      ...new HeaderField(),
      ...expectedSimpleField()
    };
    expect(HeaderField.fromApiFormInfo(simpleObj)).toEqual(expTextField);
  });
});

function expectedSimpleField(): Field {
  const field = new Field();
  field.title = "something";
  field.type = "general";
  return field;
}

function expectedCheckboxesField(): CheckboxesField {
  const field = new CheckboxesField();
  field.type = "checkboxes";
  field.title =
    "Choose 4 separate or mix and match candy to began placing your order";
  field.maximumSelections = 4;
  field.defaultQuantity = 1;
  field.options = [
    { name: "Butterfinger", price: null },
    { name: "Twix", price: null }
  ];
  return field;
}

function expectedSelectboxField(): SelectboxField {
  const field = new SelectboxField();
  field.type = "selectbox";
  field.title = "Add a Birthday Gift Card";
  field.placeholder = "Choose a Card";
  field.options = [
    "There are two great days in a person's life - the day we are born and the day we discover why. -William Barclay",
    "Today you are you! That is truer than true! There is no one alive who is you-er than you! -Dr. Seuss"
  ];
  return field;
}
