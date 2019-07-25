// @flow
import React, { Component } from "react";
import { View, Text } from "react-native";
import Product from "../models/Product";

type Props = { product: Product };

const ProductListCellView = ({ product }: Props) => {
  return (
    <View style={styles.cellContainer}>
      <Text> {product.name} </Text>
    </View>
  );
};
export default ProductListCellView;
const styles = {
  cellContainer: {
    borderBottomWidth: 0.5,
    width: "100%",
    height: "10%",
    paddingVertical: 10,
    paddingHorizontal: 5
  }
};
