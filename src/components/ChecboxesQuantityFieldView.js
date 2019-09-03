// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import CheckboxesField from "../models/fields/CheckboxesField";
import Quantity from "./Quantity";
import { CheckBox, Divider } from "react-native-elements";

type Props = {
  field: CheckboxesField,
  initialValues?: boolean[],
  initialQuantities?: number[],
  maximumSelections?: number
};
type State = {
  checked: boolean[],
  quantities: number[]
};
type Option = { name: string, price: ?number };

class ChecboxesQuantityFieldView extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // use initial quantities to set checked values?
    // or just have each box's checked value be based on its quantity?
  }

  state = {
    checked:
      this.props.initialValues ||
      Array(this.props.field.options.length).fill(false),
    quantities:
      this.props.initialQuantities ||
      Array(this.props.field.options.length).fill(0)
  };

  toggleChecked = (i: number) =>
    this.changeQuantity(i, this.state.quantities[i] ? 0 : 1);

  changeQuantity(i: number, val: number) {
    const quantities = [...this.state.quantities];
    quantities[i] = val;
    this.setState({ quantities });
  }

  render() {
    const field = this.props.field;
    return (
      <View>
        <Text style={styles.title}>{field.title}</Text>
        <Space />
        {field.options.map((option: Option, i: number) => (
          <View style={styles.checkboxesContainer} key={i}>
            <CheckBox
              title={option.name}
              onPress={this.toggleChecked.bind(this, i)}
              checked={this.state.quantities[i] > 0}
              containerStyle={{ flex: 3 }}
            />
            {this.state.quantities[i] > 0 && (
              <Quantity
                value={this.state.quantities[i]}
                onChange={this.changeQuantity.bind(this, i)}
                showLabel={false}
                containerStyle={{
                  marginHorizontal: 20,
                  flex: 1
                }}
              />
            )}
          </View>
        ))}
      </View>
    );
  }
}
export default ChecboxesQuantityFieldView;
const Space = ({ height }: { height?: number }) => (
  <Divider height={height || 10} backgroundColor={"transparent"} />
);
const styles = {
  title: { fontSize: 18, fontWeight: "bold" },
  checkboxesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20
  }
};
