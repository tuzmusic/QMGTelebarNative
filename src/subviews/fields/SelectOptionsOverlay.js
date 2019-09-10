// @flow
import React, {Component} from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Overlay } from "react-native-elements";
import SelectboxField from "../../models/fields/SelectboxField";

type Props = { 
  field: SelectboxField, 
  dismissOverlay: function, 
  onSubmit: string => void 
}

class SelectOptionsOverlay extends Component<Props> {
  render() {
    const props = this.props
      return (
        <Overlay isVisible height={"auto"} onBackdropPress={props.dismissOverlay}>
          <View>
            {props.field.options.map((opt, i) => (
              <TouchableOpacity
                onPress={() => props.onSubmit(opt)}
                style={styles.option}
                key={i}
                testID={`VISIBLE_SELECT_OPTIONS[${i}]`}
              >
                <Text>{opt}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Overlay>
    );
  }
};

const styles = {  
  option: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey"
  },
}

export default SelectOptionsOverlay