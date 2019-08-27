// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Divider, CheckBox } from "react-native-elements";
import type { FrequencyFormOption } from "../models/forms/FrequencyForm";
import FrequencyForm from "../models/forms/FrequencyForm";

type Props = { form: FrequencyForm, priceDelegate: number => void };
type State = { selections: FrequencyFormOption[] };

export default class FrequencyFormView extends Component<Props, State> {
  state = { selections: [] };
  async onCheck(option: FrequencyFormOption) {
    await this.setState({ selections: this.state.selections.concat(option) });
    this.props.priceDelegate(this.optionsPrice);
  }
  async onUncheck(option: FrequencyFormOption) {
    const selections = [...this.state.selections];
    const index = selections.indexOf(option);
    selections.splice(index, 1);
    await this.setState({ selections });
    this.props.priceDelegate(this.optionsPrice);
  }

  get optionsPrice() {
    const price = this.state.selections.reduce(
      (acc, opt) => acc + opt.price,
      0
    );
    return price;
  }

  render() {
    const form = this.props.form;
    const options = form.fields[0].options;
    const Space = () => <Divider height={20} backgroundColor="transparent" />;

    return (
      <View>
        <Text style={styles.title}>Select a subscription (optional)</Text>
        <Space />
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
