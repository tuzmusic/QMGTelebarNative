// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import Product from "../models/Product";
import CardForm from "../models/CardForm";
import FrequencyForm from "../models/FrequencyForm";
import CardFormView from "./CardFormView";
import FrequencyFormView from "./FrequencyFormView";

type Props = { product: Product, priceDelegate: number => void };

export default class FormContainer extends Component<Props> {
  form: CardForm | FrequencyForm;
  formType: "card" | "frequency";

  constructor(props: Props) {
    super(props);
    this.props = props;

    const product = this.props.product;
    this.formType = product.formInfo.form_type;
    // debugger;
    switch (this.formType) {
      case "card":
        this.form = CardForm.fromApiProduct(product);
        break;
      case "frequency":
        this.form = FrequencyForm.fromApiProduct(product);
        break;
    }
  }

  render() {
    return this.formType === "card" ? (
      <CardFormView form={this.form} />
    ) : (
      <FrequencyFormView
        form={this.form}
        priceDelegate={this.props.priceDelegate}
      />
    );
  }
}
