// @flow
import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Image, Divider } from "react-native-elements";
import Product from "../models/Product";
import { MaterialIndicator } from "react-native-indicators";
import FormContainer from "../subviews/FormContainer";

type Props = { product: Product };

export default class ProductDetailScreen extends Component<Props> {
  product: Product;
  constructor(props: Props) {
    super(props);
    this.product =
      this.props.product || this.props.navigation.getParam("product");
  }

  render() {
    const Space = () => <Divider height={20} backgroundColor="transparent" />;
    const product = this.product;
    const image = product.images[0];
    return (
      <View style={styles.container}>
        <View /* IMAGE */ style={styles.imageContainer}>
          <Image
            style={[styles.image]}
            source={{ uri: image.src }}
            PlaceholderContent={<ActivityIndicator color={"blue"} />}
          />
        </View>
        <View /* BASIC INFO */ style={styles.basicInfoContainer}>
          <Text style={text.name}>{product.name}</Text>
          <Text style={text.price}>${product.price}</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={text.description}>
            {// the website itself appears to use the short_description
            product.shortDescription || product.description}
          </Text>
          <Space />
          <FormContainer product={product} />
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
  },
  description: {
    fontSize: 18
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
  basicInfoContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 15
  },
  bodyContainer: {}
};
