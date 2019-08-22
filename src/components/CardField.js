// @flow
import type { CardFormSelectField } from "../models/CardForm";
import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { CheckBox, Overlay, Input, Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DEV_MODE } from "../constants/devMode";
import CardFormTextAreaOverlay from "./CardFormTextAreaOverlay";
import SelectOptionsOverlay from "./SelectOptionsOverlay";

const AUTOMATE = DEV_MODE && true;

type Props = {
  field: CardFormSelectField,
  selectionHandler: (field: CardFormSelectField, selection: string) => void,
  isCurrentField: boolean
};
type State = {
  showOptions: boolean,
  showTextArea: boolean,
  selectedOption: ?string
};

export default class CardField extends Component<Props, State> {
  state = {
    showOptions: false,
    showTextArea: false,
    selectedOption: null
  };

  componentDidMount = () => {
    // if (AUTOMATE) this.setState({showTextArea:true})
  };

  toggleOptions = () => this.setState({ showOptions: !this.state.showOptions });
  toggleTextArea = () =>
    this.setState({ showTextArea: !this.state.showTextArea });

  async handleSubmit(option: string) {
    await this.setState({ selectedOption: option, showOptions: false });
    await this.props.selectionHandler(this.props.field, option);
  }

  render() {
    const field = this.props.field;
    return (
      <View>
        <CheckBox
          title={field.title}
          checked={this.props.isCurrentField}
          onPress={() =>
            field.type === "select"
              ? this.toggleOptions()
              : this.toggleTextArea()
          }
        />
        {/* OVERLAY FOR OPTIONS */
        /* TO-DO: 
              Genericize showOptions and showTextArea into showOverlay.
              Switch on field type to determine which overlay to show.
              (this requires nesting the conditional flow a bit)
           */
        this.state.showOptions && (
          <SelectOptionsOverlay
            field={field}
            dismissOverlay={this.toggleOptions.bind(this)}
            onOptionPress={this.handleSubmit.bind(this)}
          />
        )}
        {/* OVERLAY FOR TEXTAREA */
        this.state.showTextArea && (
          <CardFormTextAreaOverlay
            field={field}
            dismissOverlay={this.toggleTextArea.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}
          />
        )}
        {/* SELECTED MESSGAE */
        this.props.isCurrentField && (
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
