// @flow
import type { CardFormSelectField } from "../models/CardForm";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Overlay } from "react-native-elements";

type SelectOptionsProps = { 
  field: CardFormSelectField, 
  dismissOverlay: function, 
  onOptionPress: string => void 
}

const SelectOptionsOverlay = (props: SelectOptionsProps) => {
  return (
    <Overlay isVisible height={"auto"} onBackdropPress={props.dismissOverlay}>
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
}

export default SelectOptionsOverlay