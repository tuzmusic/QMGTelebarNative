// @flow
import type { CardFormSelectField } from "../models/CardForm";
import React, { Component } from "react";
import { View, Text } from "react-native";
import { CheckBox, Overlay } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  field: CardFormSelectField,
  selectionHandler: (field: CardFormSelectField, selection: string) => void,
  isCurrentField: boolean
};
type State = { showOptions: boolean, selectedOption: ?string };

export default class CardField extends Component<Props, State> {
  state = { showOptions: false, selectedOption: null };

  toggleOptions = () => this.setState({ showOptions: !this.state.showOptions });

  async handleOptionPress(option: string) {
    await this.setState({ selectedOption: option, showOptions: false });
    await this.props.selectionHandler(this.props.field, option)
  }

  render() {
    const field = this.props.field;
    field.title.startsWith("Add") && console.log(field.title, this.props.isCurrentField);
    return (
      <View>
        <CheckBox 
          title={field.title} 
          checked={this.props.isCurrentField} 
          onPress={this.toggleOptions.bind(this)}
        />
        {this.state.showOptions && (
          <SelectOptions
            field={field}
            dismissOverlay={this.toggleOptions.bind(this)}
            onOptionPress={this.handleOptionPress.bind(this)}
          />
        )}
        {this.props.isCurrentField && <Text style={styles.message}>{this.state.selectedOption}</Text>}
      </View>
    );
  }
}

type SelectOptionsProps = { 
  field: CardFormSelectField, 
  dismissOverlay: function, 
  onOptionPress: string => void 
}

const SelectOptions = (props: SelectOptionsProps) => {
  return (
    <Overlay
      isVisible
      overlayStyle={styles.overlay}
      height={"auto"}
      onBackdropPress={props.dismissOverlay}
    >
      <View>
        {props.field.options.map((opt, i) => (
          <TouchableOpacity
            onPress={() => props.onOptionPress(opt)}
            style={styles.option}
            key={i}
          >
            <Text>{opt}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Overlay>
  );
};

const styles = {
  option: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey"
  },
  message: {
    fontSize: 18,
    fontStyle: 'italic',
    paddingHorizontal: 15,
  }
};
