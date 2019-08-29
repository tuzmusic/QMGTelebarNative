// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import Field from "../models/fields/Field";
import SelectboxFieldView from "../components/SelectboxFieldView";
import TextareaFieldView from "../components/TextareaFieldView";
import TextareaField from "../models/fields/TextareaField";
import SelectboxField from "../models/fields/SelectboxField";

type Props = { fields: Field[] };
type State = {};

class FieldsRenderer extends Component<Props, State> {
  render() {
    const MockFields = [
      this.props.fields.find(f => f.type === "textarea") || new Field(),
      this.props.fields.find(f => f.type === "selectbox") || new Field()
    ];
    const mockTextareaField: TextareaField = Object.assign(
      new TextareaField(),
      {
        title: "Enter some text!",
        type: "textarea"
      }
    );

    const fields = MockFields;
    return (
      <View>
        {fields.map((field, i: number) => {
          if (field instanceof SelectboxField) {
            return (
              <SelectboxFieldView
                key={i}
                field={field}
                selectionHandler={(field, option) => console.log(field, option)}
              />
            );
          } else if (field instanceof TextareaField) {
            return (
              <TextareaFieldView
                key={i}
                field={field}
                showSubmittedText={true}
                selectionHandler={(field, option) => console.log(field, option)}
              />
            );
          } else {
            return <Text key={i}>A Field</Text>;
          }
        })}
      </View>
    );
  }
}
export default FieldsRenderer;
