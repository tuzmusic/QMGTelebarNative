// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import SubscriptionFormView from "../subviews/SubscriptionFormView";
import { subscriptionProducts } from "../../__mocks__/subscription-products-response";
import Form from "../models/forms/Form";

type Props = {};
type State = {};

class SubscriptionFormRenderer extends Component<Props, State> {
  render() {
    const product = subscriptionProducts[0];
    const formInfo = product.form_info;
    const form = Form.assembleForm(formInfo);

    return (
      <View style={{ marginHorizontal: 20, marginVertical: 70 }}>
        <SubscriptionFormView form={form} />
      </View>
    );
  }
}
export default SubscriptionFormRenderer;
