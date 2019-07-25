// @flow
import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { Image } from "react-native-elements";
import Product from "../models/Product";

type Props = { product: Product };

const ProductListCellView = ({ product }: Props) => {
  console.log(product.images[0].src);

  return (
    <View style={styles.cellContainer}>
      <Image
        source={{ uri: product.images[0].src }}
        style={styles.backgroundImage}
      />
      <NameText> {product.name} </NameText>
      <PriceText> ${product.price} </PriceText>
    </View>
  );
};
export default ProductListCellView;

const styles = {
  cellContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: "grey",
    width: "100%",
    height: "11%"
    // paddingVertical: 10
  },
  backgroundImage: {
    width: "120%",
    height: "120%",
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center"
  }
};
const baseSize = 14;
const text = {
  name: { fontSize: baseSize + 4, fontWeight: "bold" },
  price: { fontSize: baseSize + 2, color: "green" }
};
const NameText = props => <Text style={text.name}>{props.children}</Text>;
const PriceText = props => <Text style={text.price}>{props.children}</Text>;
