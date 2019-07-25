// @flow
import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  Image
} from "react-native";
// import { Image } from "react-native-elements";
import Product from "../models/Product";

type Props = { product: Product };

const ProductListCellView = ({ product }: Props) => {
  console.log(product.images[0].src);

  return (
    <View style={styles.cellContainer}>
      <ImageBackground
        source={{ uri: product.images[0].src }}
        style={styles.backgroundImage}
        // PlaceholderContent={<ActivityIndicator />}
      >
        <View style={styles.textContainer}>
          <NameText> {product.name} </NameText>
          <PriceText> ${product.price} </PriceText>
        </View>
      </ImageBackground>
    </View>
  );
};
export default ProductListCellView;

const styles = {
  cellContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    width: "100%",
    height: "15%"
    // paddingVertical: 10
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center"
    // padding: 10
  },
  textContainer: {
    backgroundColor: "black",
    maxWidth: "50%",
    padding: 5,
    opacity: 0.75
  }
};
const baseSize = 14;
const text = {
  name: {
    fontSize: baseSize + 8,
    fontWeight: "bold",
    color: "white"
  },
  price: { fontSize: baseSize + 4, color: "white" }
};
const NameText = props => <Text style={text.name}>{props.children}</Text>;
const PriceText = props => <Text style={text.price}>{props.children}</Text>;
