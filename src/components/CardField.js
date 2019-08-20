// @flow
import type { CardFormSelectField } from "../models/CardForm";
import React, { Component } from "react";
import { View, Text } from "react-native";
import { CheckBox } from "react-native-elements";

type Props = {
  field: CardFormSelectField
};

export default class CardField extends Component<Props> {
  render() {
    const field = this.props.field;
    const checkedIcon = () => <Text>ø</Text>;
    const uncheckedIcon = () => <Text>O</Text>;
    return (
      <View>
        <CheckBox title={field.title} />
        {field.options && <SelectOptions field={field} />}
      </View>
    );
  }
}

const SelectOptions = ({ field }) => {
  return field.options.map(opt => <Text>{opt}</Text>);
};
