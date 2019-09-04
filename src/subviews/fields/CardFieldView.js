// @flow
import type {
  CardFormField,
  CardFormSelectField,
  CardFormTextAreaField
} from "../../models/forms/CardForm";
import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { CheckBox, Overlay, Input, Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DEV_MODE } from "../../constants/devMode";
import CardFormTextAreaOverlay from "./CardFormTextAreaOverlay";
import SelectOptionsOverlay from "./SelectOptionsOverlay";

const AUTOMATE = DEV_MODE && true;

type Props = {
  field: CardFormSelectField,
  selectionHandler: (field: CardFormField, selection: string) => void,
  isCurrentField: boolean
};
type State = {
  showOverlay: boolean,
  selectedOption: ?string
};

export default class CardFieldView extends Component<Props, State> {
  state = {
    showOverlay: false,
    selectedOption: null
  };

  componentDidMount = () => {
    // if (AUTOMATE) this.setState({showTextArea:true})
  };

  toggleOverlay = () => this.setState({ showOverlay: !this.state.showOverlay });

  async handleSubmit(option: string) {
    console.log(option);

    await this.setState({ selectedOption: option, showOverlay: false });
    await this.props.selectionHandler(this.props.field, option);
  }

  overlay(field: CardFormField) {
    const props = {
      field: field,
      dismissOverlay: this.toggleOverlay.bind(this),
      onSubmit: this.handleSubmit.bind(this)
    };
    switch (field.type) {
      case "select":
        return <SelectOptionsOverlay {...props} />;
      case "textarea":
        return <CardFormTextAreaOverlay {...props} />;
    }
  }

  render() {
    const field = this.props.field;
    const checkBoxProps = {
      title: field.title,
      checked: this.props.isCurrentField,
      onPress: this.toggleOverlay.bind(this)
    };

    return (
      <View>
        <CheckBox {...checkBoxProps} />
        {this.state.showOverlay && this.overlay(field)}
        {this.props.isCurrentField && (
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
