// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Divider, CheckBox } from "react-native-elements";
import type { FrequencyFormOption } from "../models/FrequencyForm";
import FrequencyForm from "../models/FrequencyForm";
import CheckboxListFieldView from "../components/CheckboxListFieldView";

type Props = { form: FrequencyForm };
export default class FrequencyFormView extends Component<Props> {
  render() {
    const form = this.props.form;
    const options = form.fields[0].options;
    const Space = () => <Divider height={20} backgroundColor="transparent" />;
    return (
      <View>
        <Text style={styles.title}>{form.title}</Text>
        <Space />
        {/* We "should" iterate through the fields, and check their type. However...
            We know this form has ONE field 
            We know that field is an OPTIONS field */}
        <CheckboxListFieldView options={options} />
      </View>
    );
  }
}

const baseSize = 18;
const styles = {
  title: { fontSize: baseSize, fontWeight: "bold" }
};
