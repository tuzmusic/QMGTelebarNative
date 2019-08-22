// @flow
import React, { Component } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { Input, Icon, Image, Divider } from "react-native-elements";
import Product from "../models/Product";
import { MaterialIndicator } from "react-native-indicators";
import FormContainer from "../subviews/FormContainer";

type Props = { product: Product };
type State = { message?: ?string, quantity: number };

export default class ProductDetailScreen extends Component<Props, State> {
  product: Product;
  constructor(props: Props) {
    super(props);
    this.product =
      this.props.product || this.props.navigation.getParam("product");
  }

  state = { message: null, quantity: 1 };

  render() {
    const Space = () => <Divider height={20} backgroundColor="transparent" />;
    const product = this.product;
    const image = product.images[0];
    return (
      <KeyboardAvoidingView behavior="height" style={{}}>
        <ScrollView>
          <View style={styles.container}>
            <View /* IMAGE */ style={styles.rowContainer}>
              <Image
                style={[styles.image]}
                containerStyle={[styles.imageContainer]}
                source={{ uri: image.src }}
                PlaceholderContent={<ActivityIndicator color={"blue"} />}
              />
              <View /* BASIC INFO */ style={styles.basicInfoContainer}>
                <Text style={text.name}>{product.name}</Text>
                <Text style={text.price}>${product.price}</Text>
                <Quantity
                  value={String(this.state.quantity)}
                  onChange={n => this.setState({ quantity: n })}
                />
              </View>
            </View>
            <View /* BODY AND FORM */ style={styles.bodyContainer}>
              <Text style={text.description}>
                {// the website itself appears to use the short_description
                product.shortDescription || product.description}
              </Text>
              <Space />
              <FormContainer product={product} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const Quantity = props => {
  function onChange(n) {
    const newVal = Number(props.value) + n;
    if (newVal > 0) props.onChange(newVal);
  }
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
  const iconProps = {
    size: 30,
    color: "grey",
    containerStyle: styles.iconContainer
  };
  return (
    <View style={styles.superContainer}>
      <Text style={styles.text}>Quantity:</Text>
      <View style={styles.row}>
        <Icon
          type="evilicon"
          name="minus"
          onPress={() => onChange(-1)}
          {...iconProps}
        />
        <Input
          // inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          value={props.value}
        />
        <Icon
          type="evilicon"
          name="plus"
          onPress={() => onChange(1)}
          {...iconProps}
        />
      </View>
    </View>
  );
};

const baseSize = 17;
const text = {
  name: {
    fontWeight: "bold",
    fontSize: 24
  },
  price: {
    fontSize: 22
  },
  description: {
    fontSize: 18
  }
};
const full = "100%";
const styles = {
  container: { margin: 20 },
  rowContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    // height: 100,
    flex: 1
  },
  imageContainer: {
    flex: 2
  },
  image: {
    resizeMode: "cover",
    height: full,
    width: full
  },
  basicInfoContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 15,
    flex: 2
    // borderWidth: 1
  },
  bodyContainer: {}
};
