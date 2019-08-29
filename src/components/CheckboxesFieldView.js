// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import CheckboxesField from "../models/fields/CheckboxesField";
import { CheckBox, Divider } from "react-native-elements";

type Props = { field: CheckboxesField, initialValues?: boolean[] };
type State = {
  checked: boolean[]
};
type Option = { name: string, price: ?number };
class CheckboxesFieldView extends Component<Props, State> {
  state = {
    checked:
      this.props.initialValues ||
      Array(this.props.field.options.length).fill(false)
  };

  toggleChecked(i: number) {
    const checked = [...this.state.checked];
    checked[i] = !checked[i];
    this.setState({ ...this.state, checked });
  }

  render() {
    const field = this.props.field;
    return (
      <View>
        <Text style={styles.title}>{field.title}</Text>
        <Space />
        {field.options.map((option: Option, i: number) => (
          <View key={i}>
            <CheckBox
              title={option.name}
              onPress={this.toggleChecked.bind(this, i)}
              checked={this.state.checked[i]}
            />
          </View>
        ))}
      </View>
    );
  }
}
export default CheckboxesFieldView;
const Space = ({ height }: { height?: number }) => (
  <Divider height={height || 10} backgroundColor={"transparent"} />
);
const styles = {
  title: { fontSize: 18, fontWeight: "bold" }
};
