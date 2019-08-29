// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import HeaderField from "../models/fields/HeaderField";

type Props = { field: HeaderField };

class HeaderFieldView extends Component<Props> {
  render() {
    return (
      <View>
        <Text style={styles.title}>{this.props.field.title}</Text>
      </View>
    );
  }
}
export default HeaderFieldView;

const styles = {
  title: { fontSize: 18, fontWeight: "bold" }
};
