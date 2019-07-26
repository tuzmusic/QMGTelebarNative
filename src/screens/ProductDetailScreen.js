// @flow
import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import Product from "../models/Product";
import { MaterialIndicator } from "react-native-indicators";

type Props = { product: Product };

export default class ProductDetailScreen extends Component<Props> {
  product: Product;
  constructor(props: Props) {
    super(props);
    this.product =
      this.props.product || this.props.navigation.getParam("product");
  }

  render() {
    const product = this.product;
    const image = product.images[0];
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={[styles.image]}
            source={{ uri: image.src }}
            PlaceholderContent={<ActivityIndicator color={"blue"} />}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={text.name}>{product.name}</Text>
          <Text style={text.price}>${product.price}</Text>
          <Text style={text.price}>{product.description}</Text>
        </View>
      </View>
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
  }
};

const styles = {
  container: { margin: 20 },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 100
  },
  image: {
    resizeMode: "center",
    height: "100%",
    width: 300
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 15
  }
};
