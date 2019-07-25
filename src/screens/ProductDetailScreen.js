// @flow
import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Product from "../models/Product";

type Props = { product: Product };

export default class ProductDetailScreen extends Component<Props> {
  product: Product;
  constructor(props: Props) {
    super(props);
    this.product =
      this.props.product || this.props.navigation.getParam("product");
  }

  render() {
    return (
      <View>
        <Text> {this.product.name} </Text>
      </View>
    );
  }
}
