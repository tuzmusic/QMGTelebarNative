// @flow
import React from "react";
import { Text, View } from "react-native";
import { Input, Icon } from "react-native-elements";

type Props = { value: string, onChange: number => void };

const Quantity = (props: Props) => {
  function onChange(n) {
    const newVal = Number(props.value) + n;
    if (newVal > 0) props.onChange(newVal);
  }

  const iconProps = {
    size: 30,
    type: "evilicon",

    color: "grey",
    containerStyle: styles.iconContainer
  };
  return (
    <View style={styles.superContainer}>
      <Text style={styles.text}>Quantity:</Text>
      <View style={styles.row}>
        <Icon name="minus" onPress={() => onChange(-1)} {...iconProps} />
        <Input
          // inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          value={props.value}
        />
        <Icon name="plus" onPress={() => onChange(1)} {...iconProps} />
      </View>
    </View>
  );
};
const styles = {
  input: {
    borderBottomWidth: 1,
    borderColor: "grey",
    textAlign: "center"
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderWidth: 1,
    height: 40,
    width: 50,
    margin: 0
    // alignItems: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 40
  },
  iconContainer: {},
  superContainer: {
    alignItems: "center"
  },
  text: {
    margin: 5,
    fontSize: 17
  }
};
export default Quantity;
