// @flow
import React, { Component } from "react";
import { View, Text } from "react-native";
import Product from "../models/Product";

type Props = { product: Product };

const ProductListCellView = ({ product }: Props) => {
  return (
    <View style={styles.cellContainer}>
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
    width: "95%",
    height: "10%",
    paddingVertical: 10
  }
};
const baseSize = 14;
const text = {
  name: { fontSize: baseSize + 4, fontWeight: "bold" },
  price: { fontSize: baseSize + 2, color: "green" }
};
const NameText = props => <Text style={text.name}>{props.children}</Text>;
const PriceText = props => <Text style={text.price}>{props.children}</Text>;
