// @flow
import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import { connect } from "react-redux";
import Product from "../models/Product";
import type { ProductCollection } from "../models/Product";
import ProductListCellView from "../components/ProductListCellView";

type Props = {
  products: Product[]
};

class ProductsListScreen extends Component<Props> {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.props.products.map(product => (
          <ProductListCellView key={product.id} product={product} />
        ))}
      </ScrollView>
    );
  }
}

export default connect(({ productsReducer }) => ({
  products: Object.values(productsReducer.products)
}))(ProductsListScreen);

const styles = {
  container: { flex: 1, justifyContent: "flex-start", alignItems: "center" }
};
