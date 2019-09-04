// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import CheckboxesField from "../../models/fields/CheckboxesField";
import Quantity from "../../components/Quantity";
import { CheckBox, Divider } from "react-native-elements";
import { connect } from "react-redux";

type Props = {
  field: CheckboxesField,
  initialValues?: boolean[],
  initialQuantities?: number[],
  maximumSelections?: number
};
type State = {
  quantities: number[]
};
type Option = { name: string, price: ?number };

export class CheckboxesQuantityFieldView extends Component<Props, State> {
  state = {
    quantities:
      this.props.initialQuantities ||
      Array(this.props.field.options.length).fill(0)
  };

  toggleChecked = (i: number) =>
    this.changeQuantity(i, this.state.quantities[i] ? 0 : 1);

  changeQuantity(i: number, val: number) {
    const quantities = [...this.state.quantities];
    quantities[i] = val;

    const newTotal = quantities.reduce((acc: number, val: number) => acc + val);
    if (this.props.maximumSelections && newTotal > this.props.maximumSelections)
      return;

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

export default CheckboxesQuantityFieldView;
// export default connect()(CheckboxesQuantityFieldView);

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
