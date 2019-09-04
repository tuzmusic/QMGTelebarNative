// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import Field from "../models/fields/Field";
import SelectboxField from "../models/fields/SelectboxField";
import SelectboxFieldView from "../subviews/fields/SelectboxFieldView";
import TextareaField from "../models/fields/TextareaField";
import TextareaFieldView from "../subviews/fields/TextareaFieldView";
import HeaderField from "../models/fields/HeaderField";
import HeaderFieldView from "../subviews/fields/HeaderFieldView";
import CheckboxesField from "../models/fields/CheckboxesField";
import ChecboxesQuantityFieldView from "../subviews/fields/ChecboxesQuantityFieldView";
import FieldRenderer from "./FieldRenderer";
type Props = { fields: Field[] };
type State = {};

class FieldsRenderer extends Component<Props, State> {
  render() {
    const mockFields = [
      this.props.fields.find(f => f.type === "checkboxes") || new Field(),
      this.props.fields.find(f => f.type === "textarea") || new Field()
      // this.props.fields.find(f => f.type === "selectbox") || new Field()
      // this.props.fields.find(f => f.type === "header") || new Field()
    ];

    mockFields[0].options = ["Justin", "Travis", "Griffin"].map(n => ({
      name: n,
      price: 1
    }));

    const fields = mockFields;
    // return <FieldRenderer field={fields[0]} />;
    return (
      <View>
        {fields.map((field, i) => {
          return <FieldRenderer key={i} field={field} />;
        })}
      </View>
    );
  }
}
export default FieldsRenderer;
