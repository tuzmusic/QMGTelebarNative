// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import CheckboxesField from "../../models/fields/CheckboxesField";
import Quantity from "../../components/Quantity";
import { CheckBox, Divider } from "react-native-elements";
import { connect } from "react-redux";

type Props = {
  field: CheckboxesField, // { title, type, options }
  changeQuantity: (number, number) => void,
  maximumSelections?: ?number,
  quantities?: number[],
  defaultQuantity?: number,
  testID?: string
};

type Option = { name: string, price: ?number };

export class CheckboxesQuantityFieldView extends Component<Props> {
  toggleChecked = (i: number) =>
    this.changeQuantity(i, this.quantities[i] ? 0 : 1);

  get quantities(): number[] {
    // should also handle quantities props with incorrect length (filling out the rest with 0)
    return (
      this.props.quantities ||
      Array(this.props.field.options.length).fill(
        this.props.defaultQuantity || 0
      )
    );
  }

  changeQuantity(i: number, val: number) {
    let max = this.props.maximumSelections;
    if (max) {
      const quantities = [...this.quantities];
      quantities[i] = val;
      const newTotal = quantities.reduce(
        (acc: number, val: number) => acc + val
      );
      if (newTotal > max) return;
    }
    this.props.changeQuantity(i, val);
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>{this.props.field.title}</Text>
        <Space />
        {this.props.field.options.map((option: Option, i: number) => {
          const testIdBase = this.props.testID && `${this.props.testID}[${i}]`;
          // console.log(testIdBase);

          return (
            <View style={styles.checkboxesContainer} key={i}>
              <CheckBox
                title={option.name}
                onPress={() => this.toggleChecked(i)}
                checked={this.quantities[i] > 0}
                containerStyle={{ flex: 3 }}
                testID={testIdBase && testIdBase}
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
                  testID={testIdBase && testIdBase + "_QUANTITY"}
                />
              )}
            </View>
          );
        })}
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
