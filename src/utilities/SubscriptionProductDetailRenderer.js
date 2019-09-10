// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import { subscriptionProducts } from "../../__mocks__/subscription-products-response";
import Form from "../models/forms/Form";
import SubscriptionProductDetailScreen from "../screens/SubscriptionProductDetailScreen";

import SubscriptionProduct from "../models/SubscriptionProduct";

type Props = {};
type State = {};

class SubscriptionPageRenderer extends Component<Props, State> {
  render() {
    const product = SubscriptionProduct.fromApi(subscriptionProducts[0]);
    // const formInfo = product.form_info;
    // const form = Form.assembleForm(formInfo);

    return (
      <View style={{ marginHorizontal: 20, marginVertical: 70 }}>
        <SubscriptionProductDetailScreen product={product} />
      </View>
    );
  }
}
export default SubscriptionPageRenderer;
