// @flow
import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  Image,
  TouchableOpacity
} from "react-native";
// import { Image } from "react-native-elements";
import Product from "../models/Product";

type Props = { product: Product, onProductPress: Product => {} };

const ProductListCellView = ({ product, ...props }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onProductPress(product);
      }}
      style={styles.cellContainer}
    >
      <ImageBackground
        source={{ uri: product.images[0].src }}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.textContainer}>
          <NameText> {product.name} </NameText>
          <PriceText> ${product.price} </PriceText>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
export default ProductListCellView;

const styles = {
  cellContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    width: "100%",
    height: 100,
    backgroundColor: "lightblue"
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },
  imageStyle: {
    // height: "140%",
    // width: "140%",
    // left: "-20%",
    // top: "-20%"
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
