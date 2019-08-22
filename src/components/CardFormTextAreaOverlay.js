// @flow

import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { Overlay, Input, Button } from "react-native-elements";
import { DEV_MODE } from "../constants/devMode";

const AUTOMATE = DEV_MODE && true;

type Props = {
  field: { title: string },
  onSubmit: string => void,
  dismissOverlay: function
};
type State = { message: string };

export default class CardFormTextAreaOverlay extends Component<Props, State> {
  state = { message: "" };
  componentDidMount = () => {
    if (AUTOMATE) this.setState({message: "Custom message!"})    
  };
  
  render() {
    return (
      <Overlay
        isVisible
        height={"auto"}
        onBackdropPress={this.props.dismissOverlay}
      >
        <KeyboardAvoidingView behavior='position'
        >
          <Text>{this.props.field.title}</Text>
          <Input
            // ref={ref => (this.textInput = ref)}
            inputStyle={styles.input}
            inputContainerStyle={styles.inputContainer}
            placeholder="Write your message here"
            value={this.state.message}
            onChangeText={message => this.setState({ message })}
            multiline={true}
            textAlignVertical={"top"}
            numberOfLines={100}
          />
          <Button
            title="Save"
            containerStyle={styles.buttonContainer}
            onPress={() => this.props.onSubmit(this.state.message)}
          />
        </KeyboardAvoidingView>
      </Overlay>
    );
  }
}

const baseSize = 16;
const styles = {
  buttonContainer: {
    // width: "80%",
    paddingHorizontal: 20,
  },
  input: {
    borderColor: "grey",
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 300,
  },
  inputContainer: {
    // height: 100,
    borderBottomWidth: 0,
    marginVertical: 15,
    marginHorizontal: 0
  },
};