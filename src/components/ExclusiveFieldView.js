// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import { CheckBox } from "react-native-elements";
import Field from "../models/fields/Field";
import TextareaField from "../models/fields/TextareaField";
import SelectboxField from "../models/fields/SelectboxField";
import TextAreaOverlay from "./TextAreaOverlay";
import SelectOptionsOverlay from "./SelectOptionsOverlay";

type Props = {
  field: TextareaField | SelectboxField,
  selectionHandler: (
    field: TextareaField | SelectboxField,
    selection: string
  ) => void,
  isSelected?: boolean
};
type State = {
  showOverlay: boolean,
  message: ?string
};

export class ExclusiveFieldView extends Component<Props, State> {
  state = { message: "", showOverlay: false };

  toggleOverlay = () => this.setState({ showOverlay: !this.state.showOverlay });

  async handleSubmit(message: string) {
    await this.setState({ message, showOverlay: false });
    await this.props.selectionHandler(this.props.field, message);
  }

  overlay() {
    const field = this.props.field;
    const props = {
      field: field,
      dismissOverlay: this.toggleOverlay.bind(this),
      onSubmit: this.handleSubmit.bind(this)
    };

    if (field instanceof TextareaField) {
      return <TextAreaOverlay field={field} {...props} />;
    } else if (field instanceof SelectboxField) {
      return <SelectOptionsOverlay field={field} {...props} />;
    } else {
      return <View />;
    }
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
        {this.state.showOverlay && this.overlay()}
        {this.props.isSelected && (
          <Text style={styles.message}>{this.state.message}</Text>
        )}
      </View>
    );
  }
}

export default ExclusiveFieldView;

const styles = {
  message: {
    fontSize: 18,
    fontStyle: "italic",
    paddingHorizontal: 15
  }
};
