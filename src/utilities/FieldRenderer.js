// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import Field from "../models/fields/Field";
import SelectboxField from "../models/fields/SelectboxField";
import SelectboxFieldView from "../components/SelectboxFieldView";
import TextareaField from "../models/fields/TextareaField";
import TextareaFieldView from "../components/TextareaFieldView";
import HeaderField from "../models/fields/HeaderField";
import HeaderFieldView from "../components/HeaderFieldView";
import CheckboxesField from "../models/fields/CheckboxesField";
import ChecboxesQuantityFieldView from "../components/ChecboxesQuantityFieldView";

type Props = { field: Field };
type State = {};

class FieldRenderer extends Component<Props, State> {
  render() {
    const field = this.props.field;
    if (field instanceof SelectboxField) {
      return (
        <SelectboxFieldView
          field={field}
          selectionHandler={(field, option) => console.log(field, option)}
        />
      );
    } else if (field instanceof CheckboxesField) {
      return (
        <ChecboxesQuantityFieldView
          field={field}
          initialQuantities={[1, 1, 0]}
        />
      );
    } else if (field instanceof TextareaField) {
      return (
        <TextareaFieldView
          field={field}
          showSubmittedText={true}
          selectionHandler={(field, option) => console.log(field, option)}
        />
      );
    } else if (field instanceof HeaderField) {
      return <HeaderFieldView field={field} />;
    } else {
      return <Text>A Field</Text>;
    }
  }
}
export default FieldRenderer;
