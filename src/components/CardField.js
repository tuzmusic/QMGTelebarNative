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
    return (
      <View>
        <CheckBox title={field.title} />
      </View>
    );
  }
}
