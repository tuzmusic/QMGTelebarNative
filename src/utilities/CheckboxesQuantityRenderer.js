// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import Field from "../models/fields/Field";
import FieldCreator from "../models/fields/FieldCreator";
import CheckboxesQuantityFieldView from "../subviews/fields/CheckboxesQuantityFieldView.js";
import CheckboxesField from "../models/fields/CheckboxesField";

export default class CheckboxesQuantityRenderer extends Component {
  render() {
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
    const quantities = [[2, 0, 0], [0, 0, 0]];

    const fields: CheckboxesField[] = FieldCreator.createFieldsFromArray(
      fieldsInfo
    );

    const props = {
      // initialSelectionIndex: 2
    };

    function changeQuantity(i, val) {}

    return (
      <View style={{ marginHorizontal: 20, marginVertical: 100 }}>
        <CheckboxesQuantityFieldView
          field={fields[0]}
          quantities={quantities[0]}
          {...props}
        />
        <CheckboxesQuantityFieldView
          field={fields[1]}
          // quantities={quantities[1]}
          {...props}
        />
      </View>
    );
  }
}
