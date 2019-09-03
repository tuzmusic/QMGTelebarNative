// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import { CheckBox } from "react-native-elements";
import TextareaField from "../models/fields/TextareaField";
import TextAreaOverlay from "./TextAreaOverlay";

type Props = {
  field: TextareaField,
  selectionHandler: (field: TextareaField, selection: string) => void,
  isSelected?: boolean
};
type State = {
  showOverlay: boolean,
  message: ?string
};

class TextareaFieldView extends Component<Props, State> {
  state = { message: "", showOverlay: false };

  toggleOverlay = () => this.setState({ showOverlay: !this.state.showOverlay });

  async handleSubmit(message: string) {
    await this.setState({ message, showOverlay: false });
    await this.props.selectionHandler(this.props.field, message);
  }

  render() {
    const field = this.props.field;
    return (
      <View>
        <CheckBox
          title={field.title}
          checked={this.props.isSelected}
          onPress={this.toggleOverlay.bind(this)}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
        />
        {this.state.showOverlay && (
          <TextAreaOverlay
            field={field}
            dismissOverlay={this.toggleOverlay.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}
          />
        )}
        {this.props.isSelected && (
          <Text style={styles.message}>{this.state.message}</Text>
        )}
      </View>
    );
  }
}

export default TextareaFieldView;

const styles = {
  message: {
    fontSize: 18,
    fontStyle: "italic",
    paddingHorizontal: 15
  }
};
