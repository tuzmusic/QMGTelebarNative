// @flow
import type { CardFormSelectField } from "../models/CardForm";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Divider, CheckBox } from "react-native-elements";
import CardForm from "../models/CardForm";
import CardField from "../components/CardField";

type Props = { form: CardForm };

type State = { selectedField: ?CardFormSelectField, message: ?string };

export default class CardFormView extends Component<Props, State> {
  state = { selectedField: null, message: null };

  async handleSelection(field: CardFormSelectField, selection: string) {
    await this.setState({ selectedField: field, message: selection });
  }

  render() {
    const form = this.props.form;
    const Space = () => <Divider height={20} backgroundColor="transparent" />;

    // THIS IS A BAND-AID. THE API NEEDS TO BE FIXED.
    form.fields = convertFields(form);

    // console.log(this.state.selectedField?.title, this.state.message);

    return (
      <View>
        <Text style={styles.title}>{form.title}</Text>
        <Space />
        {form.fields.map((field, i) => (
          <CardField
            field={field}
            key={i}
            selectionHandler={this.handleSelection.bind(this)}
            isCurrentField={field.title == this.state.selectedField?.title}
          />
        ))}
      </View>
    );
  }
}

const baseSize = 18;
const styles = {
  title: { fontSize: baseSize, fontWeight: "bold" }
};

function convertFields(form: CardForm): Object[] {
  // THIS IS A BAND-AID. THE API NEEDS TO BE FIXED.
  // and all the tests redone.
  const fields = [];
  form.fields.forEach(field => {
    fields.push({ ...field, type: "select" });
  });
  fields.push({ type: "textarea", title: form.textAreaTitle });
  return fields;
}
