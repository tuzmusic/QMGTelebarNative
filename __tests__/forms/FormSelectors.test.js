import CheckboxesField from "../../src/models/fields/CheckboxesField";
import Field from "../../src/models/fields/Field";
import Form from "../../src/models/forms/Form";

describe("selectCheckboxes", () => {
  const checkboxesFields: CheckboxesField[] = Array(4).fill(
    new CheckboxesField()
  );
  const otherFields: Field[] = Array(2).fill(new Field());
  it("filters out checkboxes fields", () => {
    const fields = [...checkboxesFields, ...otherFields];
    expect(Form.selectCheckboxesFields(fields).length).toBe(4);
  });
});
