// @flow
import type { CardFormSelectField } from "../models/CardForm";
import React, { Component } from "react";
import { View, Text } from "react-native";
import { CheckBox, Overlay } from "react-native-elements";

type Props = {
  field: CardFormSelectField
};
type State = { showOptions: boolean };

export default class CardField extends Component<Props, State> {
  state = { showOptions: false };
  render() {
    const field = this.props.field;
    return (
      <View>
        <CheckBox
          title={field.title}
          onPress={() => this.setState({ showOptions: true })}
        />
        {this.state.showOptions && <SelectOptions field={field} />}
      </View>
    );
  }
}

const SelectOptions = ({ field }) => {
  return (
    <Overlay isVisible>
      <View>
        {field.options.map((opt, i) => (
          <Text key={i}>{opt}</Text>
        ))}
      </View>
    </Overlay>
  );
};
