import React, { Component } from "react";
import { Text, View } from "react-native";
import Field from "../models/fields/Field";
import FieldCreator from "../models/fields/FieldCreator";

import ExclusiveSelectboxesFormSectionView from "../subviews/fields/ExclusiveSelectboxesFormSectionView";
import SelectboxFieldView from "../subviews/fields/SelectboxFieldView";
import TextareaFieldView from "../subviews/fields/TextareaFieldView";

export default class ExclusiveSelectRenderer extends Component {
  render() {
    const fieldsInfo: Object[] = [
      {
        type: "selectbox",
        title: "First field",
        options: [
          "First field option 1",
          "First field option 2",
          "First field option 3"
        ]
      },
      {
        type: "selectbox",
        title: "Second field",
        options: [
          "Second field option 1",
          "Second field option 2",
          "Second field option 3"
        ]
      },
      {
        type: "textarea",
        title: "Third field"
      }
    ];

    const fields: Field[] = FieldCreator.createFieldsFromArray(fieldsInfo);

    const props = {
      // initialSelectionIndex: 2
    };

    return (
      <View style={{ marginHorizontal: 20, marginVertical: 100 }}>
        <ExclusiveSelectboxesFormSectionView
          onSubmit={str => {}}
          cancelTitle="None"
          fields={fields}
          {...props}
        />
      </View>
    );
  }
}
