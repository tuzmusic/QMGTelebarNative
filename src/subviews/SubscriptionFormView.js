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
import * as FormTypes from "../redux/FormTypes";
import { Button, Divider } from "react-native-elements";
import { connect } from "react-redux";

type SubmitOrderFn = ({
  card: FormTypes.Card,
  items: FormTypes.OrderItem[]
}) => { type: "CREATE_ORDER", order: {} };

type Props = {
  form: Form,
  submitOrder: SubmitOrderFn // redux action
};

type State = {
  // these may ultimately be supplied by props???
  quantities: number[][], // controls the checkbox fields; set with setQuantities
  card: ?FormTypes.Card // controls card fields; set with setCard
};

export class SubscriptionFormView extends Component<Props, State> {
  state = {
    quantities: [[], []],
    card: null
  };

  setCard(card: FormTypes.Card) {
    this.setState({ card });
  }

  processItems(): OrderItem[] {
    const { quantities } = this.state;
    // use quantities with the checkbox fields options to create the order items
  }

  handleOrder() {
    // put together the order (submitOrder will take some form-friendly type and use Order.toApi to create a valid order)
    const order = { card: this.state.card, items: [] };
    order.items = this.processItems();
    this.props.submitOrder(order);
  }

  setQuantities(fieldIndex: number, boxIndex: number, value: number) {
    const allQuantities = this.state.quantities;
    const quantities = allQuantities[fieldIndex];
    quantities[boxIndex] = value;
    allQuantities[fieldIndex] = quantities;
    this.setState({ quantities: allQuantities });
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
        <Button
          testID={"SUBMIT_BUTTON"}
          title="Submit"
          onPress={this.handleOrder.bind(this)}
          containerStyle={styles.buttonContainer}
          style={styles.button}
        />
        <Divider height={20} backgroundColor="transparent" />
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
            changeQuantity={(i, v) => this.setQuantities(0, i, v)}
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
