// @flow
import React, { Component } from "react";
import { FlatList, View, ScrollView, Text } from "react-native";
import { connect } from "react-redux";
import Product from "../models/Product";
import type { AllProductCollection } from "../redux/ProductTypes";
import ProductListCellView from "../components/ProductListCellView";
import { DEV_MODE } from "../constants/devMode";
import { selectSubscriptionProducts } from "../redux/reducers/productsReducer";
import SubscriptionProductListCellView from "../components/SubscriptionProductListCellView";

const AUTOMATE = DEV_MODE && true;

type Props = {
  products: Product[],
  navigation: Object
};

class SubscriptionProductsListScreen extends Component<Props> {
  automate() {
    setTimeout(() => {
      this.onProductPress(this.props.products[this.props.products.length - 1]);
    }, 100);
  }

  componentDidMount = () => AUTOMATE && this.automate();

  onProductPress(product) {
    this.props.navigation.navigate("SubscriptionProductDetail", {
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
          <SubscriptionProductListCellView
            product={item}
            onProductPress={this.onProductPress.bind(this)}
          />
        )}
        keyExtractor={item => `${item.id}`}
      />
    );
  }
}

const selectProps = state => ({
  products: Object.values(selectSubscriptionProducts(state))
});

export default connect(selectProps)(SubscriptionProductsListScreen);

const styles = {
  container: {
    flex: 1,
    height: "100%",
    width: "100%"
  }
};
