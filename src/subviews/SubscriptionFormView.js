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
// #endregion

type SubmitOrderFn = ({
  card: Types.Card,
  items: Types.OrderItem[]
}) => { type: "CREATE_ORDER", order: {} };

type Props = {
  form: Form,
  selectionReporter: ({
    card: ?Types.Card,
    items: Types.QuantifiedOrderItem[]
  }) => void, // sets state of parent
  submitOrder: SubmitOrderFn // redux action
};

type State = {
  // these may ultimately be supplied by props???
  quantities: number[][], // controls the checkbox fields; set with setQuantities
  card: ?Types.Card // controls card fields; set with setCard
};

export function quantifiedItemList({
  quantities,
  items
}: {
  quantities: number[],
  items: Types.OrderItem[]
}): Types.QuantifiedOrderItem[] {
  if (!items) return [];
  return items
    .map((item: Types.OrderItem, i: number) => ({
      ...item,
      quantity: quantities[i]
    }))
    .filter(item => item.quantity > 0);
}

export function totalPrice(items: Types.QuantifiedOrderItem[]): number {
  let total = 0;
  items.forEach(item => (total += (item.price || 0) * item.quantity));
  return total;
}

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

    const report =
      this.props.selectionReporter &&
      this.props.selectionReporter({
        card: this.state.card,
        items: this.getQuantifiedItems()
      });

    this.setState({ quantities: allQuantities }, this.reportState);
  }

  getQuantifiedItems(): Types.QuantifiedOrderItem[] {
    const FREE_CANDIES_FIELD = this.props.form.fields[0];
    const EXTRA_CANDIES_FIELD = this.props.form.fields[1];

    // this doesn't work (with flow) if we guard/return
    if (
      FREE_CANDIES_FIELD instanceof CheckboxesField &&
      EXTRA_CANDIES_FIELD instanceof CheckboxesField
    ) {
      const items: Types.QuantifiedOrderItem[] = [
        ...quantifiedItemList({
          quantities: this.state.quantities[0],
          items: FREE_CANDIES_FIELD.options
        }),
        ...quantifiedItemList({
          quantities: this.state.quantities[1],
          items: EXTRA_CANDIES_FIELD.options
        })
      ];
      return items;
    }
    return [];
  }

  itemList(fieldIndex: number): Types.QuantifiedOrderItem[] {
    const field = this.props.form.fields[fieldIndex];
    if (field instanceof CheckboxesField) {
      const quantities = this.state.quantities[fieldIndex];
      const items = field.options;
      return quantifiedItemList({ quantities, items });
    }
    return [];
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

function submitOrder() {
  return { type: "PLACEHOLDER" };
}

const mapState = () => ({});

export default connect(
  mapState,
  { submitOrder }
)(SubscriptionFormView);

const styles = {
  buttonContainer: {
    width: "100%",
    alignItems: "center"
  },
  button: { width: "50%" }
};
