// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import SubscriptionFormView from "../subviews/SubscriptionFormView";
import { subscriptionProducts } from "../../__mocks__/subscription-products-response";
import Form from "../models/forms/Form";
import SubscriptionProduct from "../models/SubscriptionProduct";
import CheckboxesField from "../models/fields/CheckboxesField";

type Props = {};
type State = {};

class SubscriptionFormRenderer extends Component<Props, State> {
  render() {
    const product = SubscriptionProduct.fromApi(subscriptionProducts[0]);
    const form = Form.assembleForm(product.form);

    if (form.fields[0] instanceof CheckboxesField)
      console.log(form.fields[0].maximumSelections);

    return (
      <View style={{ marginHorizontal: 20, marginVertical: 70 }}>
        <SubscriptionFormView form={form} />
      </View>
    );
  }
}
export default SubscriptionFormRenderer;
