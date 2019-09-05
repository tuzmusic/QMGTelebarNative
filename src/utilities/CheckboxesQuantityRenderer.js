// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import Field from "../models/fields/Field";
import FieldCreator from "../models/fields/FieldCreator";
import CheckboxesQuantityFieldView from "../subviews/fields/CheckboxesQuantityFieldView.js";
import CheckboxesField from "../models/fields/CheckboxesField";

const fieldsInfo: Object[] = [
  {
    type: "checkboxes",
    title: "Pick something for $5",
    options: [
      { name: "First field option 1", price: 5 },
      { name: "First field option 2", price: 5 },
      { name: "First field option 3", price: 5 }
    ]
  },
  {
    type: "checkboxes",
    title: "Pick something for free",
    options: [
      { name: "First field option 1", price: null },
      { name: "First field option 2", price: null },
      { name: "First field option 3", price: null }
    ]
  }
];
const fields: CheckboxesField[] = FieldCreator.createFieldsFromArray(
  fieldsInfo
);

const field = fields[0];
const quantities = [2, 0, 0];

type Props = {};
type State = { quantities: number[] };

export default class CheckboxesQuantityRenderer extends Component<
  Props,
  State
> {
  state = { quantities };

  changeQuantity = (i: number, val: number) => {
    const quantities = [...this.state.quantities];
    quantities[i] = val;
    this.setState({ quantities });
  };
  render() {
    return (
      <View style={{ marginHorizontal: 20, marginVertical: 100 }}>
        <CheckboxesQuantityFieldView
          field={field}
          changeQuantity={this.changeQuantity}
          quantities={this.state.quantities}
          maximumSelections={2}
        />
      </View>
    );
  }
}
