// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import Form from "../models/forms/Form";

type Props = { form: Form };
type State = {};
class GenericFormView extends Component<Props, State> {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default GenericFormView;
