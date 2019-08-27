// @flow
import React, { Component } from "react";
import { FlatList, View, ScrollView, Text } from "react-native";
import { connect } from "react-redux";
import Product from "../models/Product";
import type { ProductCollection } from "../redux/ProductTypes";
import ProductListCellView from "../components/ProductListCellView";
import { DEV_MODE } from "../constants/devMode";
import { selectProducts } from "../redux/reducers/productsReducer";

const AUTOMATE = DEV_MODE && false;

type Props = {
  products: Product[],
  navigation: Object
};

class ProductsListScreen extends Component<Props> {
  automate() {
    setTimeout(() => {
      this.onProductPress(this.props.products[this.props.products.length - 1]);
    }, 100);
  }

  componentDidMount = () => AUTOMATE && this.automate();

  onProductPress(product) {
    this.props.navigation.navigate("DetailScreen", {
      title: product.name,
      product
    });
  }

  render() {
    return !this.props.products.length ? (
      <Text>Loading.</Text>
    ) : (
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

export default connect(({ productsReducer }) => {
  const products = Object.values(selectProducts(productsReducer));
  return { products };
})(ProductsListScreen);

const styles = {
  container: {
    flex: 1,
    height: "100%",
    width: "100%"
  }
};
