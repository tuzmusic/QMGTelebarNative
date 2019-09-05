// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import CheckboxesField from "../../models/fields/CheckboxesField";
import Quantity from "../../components/Quantity";
import { CheckBox, Divider } from "react-native-elements";
import { connect } from "react-redux";

type Props = {
  // ORIGINAL (KEPT)
  field: CheckboxesField, // { title, type, options }
  maximumSelections?: number,
  // NEW
  quantities?: number[],
  changeQuantity: (number, number) => void,
  defaultQuantity?: number,

  // DEPRECATED
  initialValues?: boolean[],
  initialQuantities?: number[]
};

type Option = { name: string, price: ?number };

export class CheckboxesQuantityFieldView extends Component<Props> {
  toggleChecked = (i: number) =>
    this.props.changeQuantity(i, this.quantities[i] ? 0 : 1);

  get quantities(): number[] {
    // should also handle quantities props with incorrect length (filling out the rest with 0)
    const { length } = this.props.field.options;
    return (
      this.props.quantities ||
      Array(length).fill(this.props.defaultQuantity || 0)
    );
  }

  changeQuantity(i: number, val: number) {
    // console.log(i, val);

    // const quantities = [...this.quantities];
    // quantities[i] = val;

    const newTotal = this.quantities.reduce(
      (acc: number, val: number) => acc + val
    );
    if (this.props.maximumSelections && newTotal > this.props.maximumSelections)
      return;

    this.props.changeQuantity(i, val);
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
              onPress={() => this.toggleChecked(i)}
              checked={this.quantities[i] > 0}
              containerStyle={{ flex: 3 }}
            />
            {this.quantities[i] > 0 && (
              <Quantity
                value={this.quantities[i]}
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
