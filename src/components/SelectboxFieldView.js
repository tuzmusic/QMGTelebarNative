// @flow
import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { CheckBox, Overlay, Input, Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DEV_MODE } from "../constants/devMode";
import SelectOptionsOverlay from "./SelectOptionsOverlay";
import SelectboxField from "../models/fields/SelectboxField";

const AUTOMATE = DEV_MODE && false;

type Props = {
  field: SelectboxField,
  selectionHandler: (field: SelectboxField, selection: string) => void,
  showSelection?: boolean
};
type State = {
  showOverlay: boolean,
  selectedOption: ?string
};

export default class SelectboxFieldView extends Component<Props, State> {
  state = {
    showOverlay: false,
    selectedOption: null
  };

  componentDidMount = () => {
    if (AUTOMATE) this.setState({ showOverlay: true });
  };

  toggleOverlay = () => this.setState({ showOverlay: !this.state.showOverlay });

  async handleSubmit(option: string) {
    await this.setState({ selectedOption: option, showOverlay: false });
    await this.props.selectionHandler(this.props.field, option);
  }

  render() {
    const field = this.props.field;
    const checkBoxProps = {
      title: field.title,
      checked: this.props.showSelection,
      onPress: this.toggleOverlay.bind(this)
    };

    return (
      <View>
        <CheckBox {...checkBoxProps} />
        {this.state.showOverlay && (
          <SelectOptionsOverlay
            field={field}
            dismissOverlay={this.toggleOverlay.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}
          />
        )}
        {this.props.showSelection && (
          <Text style={styles.message}>{this.state.selectedOption}</Text>
        )}
      </View>
    );
  }
}

const styles = {
  message: {
    fontSize: 18,
    fontStyle: "italic",
    paddingHorizontal: 15
  }
};
