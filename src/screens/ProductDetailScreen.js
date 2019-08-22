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
import Quantity from "../components/Quantity";

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
