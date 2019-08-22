// @flow
import type { CardFormField } from "../models/CardForm";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Divider, CheckBox } from "react-native-elements";
import CardForm from "../models/CardForm";
import CardFieldView from "../components/CardFieldView";
import { DEV_MODE } from "../constants/devMode";

const AUTOMATE = DEV_MODE && false;

type Props = { form: CardForm };

type State = { selectedField: ?CardFormField, message: ?string };

export default class CardFormView extends Component<Props, State> {
  state = { selectedField: null, message: null };

  async handleSelection(field: CardFormField, selection: string) {
    await this.setState({ selectedField: field, message: selection });
  }

  render() {
    const form = this.props.form;
    const Space = () => <Divider height={20} backgroundColor="transparent" />;

    // console.log(this.state.selectedField?.title, this.state.message);

    return (
      <View>
        <Text style={styles.title}>{form.title}</Text>
        <Space />
        {form.fields.map((field, i) => (
          <CardFieldView
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
