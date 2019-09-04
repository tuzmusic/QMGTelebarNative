// Not actually using flow checking in this file
// Because we're (unwisely, honestly) trusting that
// the props passed to the FieldRenderer match with
// the required props of the field being rendered.
// Flow doesn't trust that.

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

type Props = { field: Field };
type State = {};

class FieldRenderer extends Component<Props, State> {
  render() {
    const field = this.props.field;
    if (field instanceof SelectboxField) {
      return <SelectboxFieldView {...this.props} />;
    } else if (field instanceof CheckboxesField) {
      return <CheckboxesQuantityFieldView {...this.props} />;
    } else if (field instanceof TextareaField) {
      return <TextareaFieldView {...this.props} />;
    } else if (field instanceof HeaderField) {
      return <HeaderFieldView {...this.props} />;
    } else {
      return <Text>A Field</Text>;
    }
  }
}
export default FieldRenderer;
