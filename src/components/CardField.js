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

  toggleOptions = () => this.setState({ showOptions: !this.state.showOptions });
  toggleTextArea = () => this.setState({ showTextArea: !this.state.showTextArea });

  async handleOptionPress(option: string) {
    await this.setState({ selectedOption: option, showOptions: false });
    await this.props.selectionHandler(this.props.field, option)
  }

  render() {
    const field = this.props.field;
    return (
      <View>
        <CheckBox 
          title={field.title} 
          checked={this.props.isCurrentField} 
          onPress={() => field.type === "select" ? this.toggleOptions() : this.toggleTextArea()}
        />
        {this.state.showOptions && (
          <SelectOptions
            field={field}
            dismissOverlay={this.toggleOptions.bind(this)}
            onOptionPress={this.handleOptionPress.bind(this)}
          />
        )}
        {this.state.showTextArea && <TextArea dismissOverlay={this.toggleTextArea.bind(this)}/>}
        {this.props.isCurrentField && <Text style={styles.message}>{this.state.selectedOption}</Text>}
      </View>
    );
  }
}

const TextArea = props => 
    <Overlay
      isVisible
      // height={"auto"}
      onBackdropPress={props.dismissOverlay}
    >
      <View>
       <Text>Textarea</Text>
      </View>
    </Overlay>

type SelectOptionsProps = { 
  field: CardFormSelectField, 
  dismissOverlay: function, 
  onOptionPress: string => void 
}

const SelectOptions = (props: SelectOptionsProps) => {
  return (
    <Overlay
      isVisible
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
