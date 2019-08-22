// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Divider, CheckBox } from "react-native-elements";
import type { FrequencyFormOption } from "../models/FrequencyForm";
import FrequencyForm from "../models/FrequencyForm";

type Props = { form: FrequencyForm };
type State = { selections: FrequencyFormOption[] };

export default class FrequencyFormView extends Component<Props, State> {
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
  get optionsPrice() {
    return this.state.selections.reduce((acc, opt) => acc + opt.price, 0);
  }

  render() {
    const form = this.props.form;
    const options = form.fields[0].options;
    const Space = () => <Divider height={20} backgroundColor="transparent" />;

    return (
      <View>
        {}
        <Text style={styles.title}>Select a subscription (optional)</Text>
        <Space />
        {}
        {options.map((option: FrequencyFormOption, i) => {
          const title = `${option.frequency}: $${option.price.toFixed(2)}`;
          const checked = this.state.selections.includes(option);
          const onPress = () =>
            checked ? this.onUncheck(option) : this.onCheck(option);
          const boxProps = { title, checked, onPress, key: i };

          return <CheckBox {...boxProps} />;
        })}
        <Text style={styles.total}>
          Options total: ${this.optionsPrice.toFixed(2)}
        </Text>
      </View>
    );
  }
}

const baseSize = 18;
const styles = {
  title: { fontSize: baseSize, fontWeight: "bold" },
  total: { fontSize: 16, fontWeight: "bold", margin: 10 }
};
