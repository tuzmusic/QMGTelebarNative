// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import CheckboxesField from "../models/fields/CheckboxesField";

type Props = { field: CheckboxesField };
type State = {};

class CheckboxesFieldView extends Component<Props, State> {
  render() {
    const field = this.props.field;
    return (
      <View>
        <Text>{field.title}</Text>
      </View>
    );
  }
}
export default CheckboxesFieldView;
