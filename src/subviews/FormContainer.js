// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import Product from "../models/Product";
import CardForm from "../models/forms/CardForm";
import FrequencyForm from "../models/forms/FrequencyForm";
import CardFormView from "./CardFormView";
import FrequencyFormView from "./FrequencyFormView";
import FieldsRenderer from "../utilities/FieldsRenderer";
import ExclusiveSelectRenderer from "../utilities/ExclusiveSelectRenderer";
import Form from "../models/forms/Form";

type Props = { product: Product, priceDelegate: number => void };

export default class FormContainer extends Component<Props> {
  render() {
    const product = this.props.product;
    const formType = product.formInfo.form_type || product.formInfo.type;
    let form;

    switch (formType) {
      case "card":
        form = CardForm.fromApiProduct(product);
        return <CardFormView form={form} />;
      case "frequency":
        return <Text>FREQUENCY FORM NEEDS UPDATING FOR NEW FORMS API</Text>;
      /** form = FrequencyForm.fromApiProduct(product);
       * return (
       *   <FrequencyFormView
       *     form={form}
       *     priceDelegate={this.props.priceDelegate}
       *   />
       * );
       */
      default:
        form = Form.assembleForm(product.formInfo);
        return <ExclusiveSelectRenderer fields={form.fields} />;
        return <FieldsRenderer fields={form.fields} />;
    }
  }
}
