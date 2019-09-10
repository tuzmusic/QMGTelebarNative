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
import CheckboxesQuantityFieldView from "../subviews/fields/CheckboxesQuantityFieldView";
import FieldRenderer from "./FieldRenderer";
type Props = { fields: Field[] };
type State = {};

class FieldsRenderer extends Component<Props, State> {
  render() {
    const fields = this.props.fields;
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
