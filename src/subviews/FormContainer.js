// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import Product from "../models/Product";
import FrequencyForm from "../models/forms/FrequencyForm";
import FrequencyFormView from "./FrequencyFormView";
import FieldsRenderer from "../utilities/FieldsRenderer";
import ExclusiveSelectRenderer from "../utilities/ExclusiveSelectRenderer";
import Form from "../models/forms/Form";

type Props = { product: Product, priceDelegate: number => void };

export default class FormContainer extends Component<Props> {
  render() {
    const product = this.props.product;
    const form: Form = product.form;

    switch (form.type) {
      case "frequency":
        return <Text>FREQUENCY FORM NEEDS UPDATING FOR NEW FORMS API</Text>;
      default:
        // form = Form.assembleForm(product.formInfo);
        return <FieldsRenderer fields={form.fields} />;
    }
  }
}
