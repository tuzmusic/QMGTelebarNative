import React, { Component } from "react";
import { Text, View } from "react-native";
import Field from "../models/fields/Field";
import FieldCreator from "../models/fields/FieldCreator";
import CheckboxesQuantityFieldView from "../subviews/fields/ChecboxesQuantityFieldView.js";

export default class CheckboxesQuantityRenderer extends Component {
  render() {
    const fieldsInfo: Object[] = [
      {
        type: "checkboxes",
        title: "Pick something for $5",
        options: [
          { name: "First field option 1", price: 5, quantity: 0 },
          { name: "First field option 2", price: 5, quantity: 0 },
          { name: "First field option 3", price: 5, quantity: 0 }
        ]
      },
      {
        type: "checkboxes",
        title: "Pick something for free",
        options: [
          { name: "First field option 1", quantity: 0 },
          { name: "First field option 2", quantity: 0 },
          { name: "First field option 3", quantity: 0 }
        ]
      }
    ];

    const fields: Field[] = FieldCreator.createFieldsFromArray(fieldsInfo);

    const props = {
      // initialSelectionIndex: 2
    };

    return (
      <View style={{ marginHorizontal: 20, marginVertical: 100 }}>
        <CheckboxesQuantityFieldView field={fields[0]} {...props} />
        <CheckboxesQuantityFieldView field={fields[1]} {...props} />
      </View>
    );
  }
}
