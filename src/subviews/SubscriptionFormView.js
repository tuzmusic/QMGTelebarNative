// #region Imports
// @flow
import React, { Fragment, Component } from "react";
import { Text, View, ScrollView } from "react-native";
import Form from "../models/forms/Form";
import CheckboxesQuantityFieldView from "./fields/CheckboxesQuantityFieldView";
import TextareaField from "../models/fields/TextareaField";
import SelectboxField from "../models/fields/SelectboxField";
import CheckboxesField from "../models/fields/CheckboxesField";
import HeaderField from "../models/fields/HeaderField";
import HeaderFieldView from "./fields/HeaderFieldView";
import { ExclusiveSelectboxesFormSectionView as CardFormView } from "./fields/ExclusiveSelectboxesFormSectionView";
import * as Types from "../redux/FormTypes";
import { Button, Divider } from "react-native-elements";
import { connect } from "react-redux";
import ShopWorker from "../models/ShopWorker";

// #endregion

type Props = {
  form: Form,
  selectionReporter: ({
    card: ?Types.Card,
    items: Types.QuantifiedOrderItem[]
  }) => void // reports changes to parent
};

type State = {
  // these may ultimately be supplied by props???
  quantities: number[][], // controls the checkbox fields; set with setQuantities
  card: ?Types.Card // controls card fields; set with setCard
};

export class SubscriptionFormView extends Component<Props, State> {
  state = {
    quantities: [[], []],
    card: null
  };

  reportState() {
    if (this.props.selectionReporter)
      this.props.selectionReporter({
        items: this.getQuantifiedItems(),
        card: this.state.card
      });
  }

  setCard = (card: Types.Card) => {
    this.setState({ card });
    this.reportState();
  };

  setQuantities(fieldIndex: number, boxIndex: number, value: number) {
    const allQuantities = this.state.quantities;
    const quantities = allQuantities[fieldIndex];
    quantities[boxIndex] = value;
    allQuantities[fieldIndex] = quantities;

    this.setState({ quantities: allQuantities }, this.reportState);
  }

  getQuantifiedItems(): Types.QuantifiedOrderItem[] {
    return this.state.quantities.flatMap((arr: number[], i: number) => {
      const field = this.props.form.fields[i];
      if (field instanceof CheckboxesField)
        return ShopWorker.quantifiedItemList({
          quantities: arr,
          items: field.options
        });
    });
  }

  render() {
    const fields = this.props.form.fields;
    // #region Forms Constants
    const FREE_CANDIES_FIELD = fields[0];
    const EXTRA_CANDIES_FIELD = fields[1];
    const HEADER_FIELD = fields[2];
    const BIRTHDAY_CARD_FIELD = fields[3];
    const ANNIV_CARD_FIELD = fields[4];
    const CUSTOMER_CARD_FIELD = fields[5];

    let CARD_FORM_FIELDS;
    if (
      BIRTHDAY_CARD_FIELD instanceof SelectboxField &&
      ANNIV_CARD_FIELD instanceof SelectboxField &&
      CUSTOMER_CARD_FIELD instanceof TextareaField
    ) {
      CARD_FORM_FIELDS = [
        BIRTHDAY_CARD_FIELD,
        ANNIV_CARD_FIELD,
        CUSTOMER_CARD_FIELD
      ];
    }
    // #endregion

    return (
      <ScrollView>
        {CARD_FORM_FIELDS && (
          <CardFormView
            testID={"CARD_FORM"}
            fields={CARD_FORM_FIELDS}
            cancelTitle="No card"
            card={this.state.card}
            setCard={this.setCard.bind(this)}
          />
        )}
        {FREE_CANDIES_FIELD instanceof CheckboxesField && (
          <CheckboxesQuantityFieldView
            testID="CHECKBOXES[0]"
            field={FREE_CANDIES_FIELD}
            quantities={this.state.quantities[0]}
            maximumSelections={FREE_CANDIES_FIELD.maximumSelections}
            changeQuantity={(i, v) => this.setQuantities(0, i, v)}
          />
        )}
        {EXTRA_CANDIES_FIELD instanceof CheckboxesField && (
          <CheckboxesQuantityFieldView
            testID="CHECKBOXES[1]"
            field={EXTRA_CANDIES_FIELD}
            quantities={this.state.quantities[1]}
            maximumSelections={EXTRA_CANDIES_FIELD.maximumSelections}
            changeQuantity={(i, v) => this.setQuantities(1, i, v)}
          />
        )}
        {fields[2] instanceof HeaderField && (
          <HeaderFieldView field={fields[2]} testID={"HEADER"} />
        )}
      </ScrollView>
    );
  }
}

export default SubscriptionFormView;

const styles = {
  buttonContainer: {
    width: "100%",
    alignItems: "center"
  },
  button: { width: "50%" }
};
