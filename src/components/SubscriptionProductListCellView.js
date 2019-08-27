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
import Product from "../models/Product";

type Props = { product: Product, onProductPress: Product => {} };

const SubscriptionProductListCellView = ({ product, ...props }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => props.onProductPress(product)}
      style={styles.cellContainer}
    >
      <View style={styles.textContainer}>
        <NameText> {product.name} </NameText>
      </View>
      <Image source={{ uri: product.images[0].src }} style={styles.image} />
    </TouchableOpacity>
  );
};
export default SubscriptionProductListCellView;

const styles = {
  cellContainer: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
    marginHorizontal: 10
  },
  image: {
    width: "50%",
    height: "100%",
    justifyContent: "center"
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "50%",
    paddingHorizontal: 10
  }
};
const baseSize = 14;
const text = {
  name: {
    fontSize: baseSize + 4
    // fontWeight: "bold"
    // color: "white"
  },
  price: { fontSize: baseSize + 4, color: "white" }
};
const NameText = props => <Text style={text.name}>{props.children}</Text>;
const PriceText = props => <Text style={text.price}>{props.children}</Text>;
