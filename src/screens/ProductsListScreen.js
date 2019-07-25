// @flow
import React, { Component } from "react";
import { FlatList, View, ScrollView, Text } from "react-native";
import { connect } from "react-redux";
import Product from "../models/Product";
import type { ProductCollection } from "../models/Product";
import ProductListCellView from "../components/ProductListCellView";

type Props = {
  products: Product[]
};

class ProductsListScreen extends Component<Props> {
  render() {
    return <WithMap products={this.props.products} />;
    // return <WithFlatList products={this.props.products} />;
  }
}

export default connect(({ productsReducer }) => ({
  products: Object.values(productsReducer.products)
}))(ProductsListScreen);

const WithFlatList = ({ products }) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListCellView product={item} />}
      keyExtractor={item => `${item.id}`}
    />
  );
};

const WithMap = ({ products }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map(p => (
        <ProductListCellView product={p} key={p.id} />
      ))}
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    height: "100%"
  }
};
