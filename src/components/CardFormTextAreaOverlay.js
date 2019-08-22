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
    // if (AUTOMATE) this.setState({message: "Custom message!"})    
  };
  
  render() {
    return (
      <KeyboardAvoidingView behavior='position' enabled>
        <Overlay
          isVisible
          height={"auto"}
          onBackdropPress={this.props.dismissOverlay}
          overlayStyle={styles.overlay}
        >
          <React.Fragment><Text style={styles.title}>{this.props.field.title}</Text>
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
          </React.Fragment>
        </Overlay>
      </KeyboardAvoidingView>
    );
  }
}

const baseSize = 16;
const styles = {
  title: { fontSize: baseSize, paddingHorizontal: 5},
  overlay: { borderRadius: 5, paddingVertical: 15, paddingHorizontal: 10, },
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