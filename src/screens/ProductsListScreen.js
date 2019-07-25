// @flow
import React, { Component } from "react";
import { FlatList, View, ScrollView, Text } from "react-native";
import { connect } from "react-redux";
import Product from "../models/Product";
import type { ProductCollection } from "../models/Product";
import ProductListCellView from "../components/ProductListCellView";

type Props = {
  products: Product[],
  navigation: Object
};

class ProductsListScreen extends Component<Props> {
  onProductPress(product) {
    console.log(product.name);

    this.props.navigation.navigate("DetailScreen", {
      title: product.name,
      product
    });
  }

  render() {
    return (
      <FlatList
        data={this.props.products}
        renderItem={({ item }) => (
          <ProductListCellView
            product={item}
            onProductPress={this.onProductPress.bind(this)}
          />
        )}
        keyExtractor={item => `${item.id}`}
      />
    );
  }
}

export default connect(({ productsReducer }) => ({
  products: Object.values(productsReducer.products).map(p => new Product(p))
}))(ProductsListScreen);

const styles = {
  container: {
    flex: 1,
    height: "100%",
    width: "100%"
  }
};
