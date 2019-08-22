// @flow
import React, { Component } from "react";
import { Divider, CheckBox } from "react-native-elements";
import { Text, View } from "react-native";
import type { FrequencyFormOption } from "../models/FrequencyForm";
import FrequencyForm from "../models/FrequencyForm";

type Props = {
  options: FrequencyFormOption[]
};

type State = {
  selections: FrequencyFormOption[]
};

export default class CheckboxListFieldView extends Component<Props, State> {
  state = { selections: [] };

  onCheck(option: FrequencyFormOption) {
    this.setState({ selections: this.state.selections.concat(option) });
  }

  onUncheck(option: FrequencyFormOption) {
    const selections = [...this.state.selections];
    const index = selections.indexOf(option);
    selections.splice(index, 1);
    this.setState({ selections });
  }

  get totalPrice() {
    return this.state.selections.reduce((acc, opt) => acc + opt.price, 0);
  }

  render() {
    return (
      <View>
        {this.props.options.map((option: FrequencyFormOption, i) => {
          const title = `${option.frequency}: $${option.price.toFixed(2)}`;
          const checked = this.state.selections.includes(option);
          return (
            <CheckBox
              title={title}
              checked={checked}
              key={i}
              onPress={() =>
                checked ? this.onUncheck(option) : this.onCheck(option)
              }
            />
          );
        })}
        <Text style={styles.total}>
          Options total: ${this.totalPrice.toFixed(2)}
        </Text>
      </View>
    );
  }
}

const styles = { total: { fontSize: 16, fontWeight: "bold", margin: 10 } };
