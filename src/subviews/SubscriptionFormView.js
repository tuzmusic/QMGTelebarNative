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

type Props = {
  form: Form,
  selectionReporter: ({
    card: ?Types.Card,
    items: Types.CheckboxesSelection[]
  }) => void, // reports changes to parent
  titleStyle?: Object
};

type State = {
  // these may ultimately be supplied by props???
  quantitiesLists: Array<number[]>, // controls the checkbox fields; set with setQuantities
  card: ?Types.Card // controls card fields; set with setCard
};

export class SubscriptionFormView extends Component<Props, State> {
  state = {
    quantitiesLists: [[], []],
    card: null
  };

  reportState() {
    if (this.props.selectionReporter)
      this.props.selectionReporter({
        items: this.getQuantifiedAndNamedItems(), // this WILL have fieldName
        card: this.state.card
      });
  }

  setCard = (card: Types.Card) => {
    this.setState({ card });
    this.reportState();
  };

  setQuantities(fieldIndex: number, boxIndex: number, value: number) {
    const allQuantities = this.state.quantitiesLists;
    const quantities = allQuantities[fieldIndex];
    quantities[boxIndex] = value;
    allQuantities[fieldIndex] = quantities;

    this.setState({ quantitiesLists: allQuantities }, this.reportState);
  }

  // THIS IS THE LAST PLACE WE HAVE FIELD INFO FOR CHECKBOXES
  getQuantifiedAndNamedItems(): Types.CheckboxesSelection[] {
    let quantifiedLists: Array<Types.QuantifiedOrderItem[]>;

    const checkboxesFields = Form.selectCheckboxesFields(
      this.props.form.fields
    );

    const { quantitiesLists } = this.state;
    const itemsLists = checkboxesFields.map(field => field.options);

    // Map quantities to items
    quantifiedLists = ShopWorker.mappedQuantifiedItemListsFromArrayOfLists(
      quantitiesLists,
      itemsLists
    );

    return ShopWorker.mappedNamedItemsFromArrayOfLists(
      quantifiedLists,
      checkboxesFields
    );
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
        {FREE_CANDIES_FIELD instanceof CheckboxesField && (
          <CheckboxesQuantityFieldView
            testID="CHECKBOXES[0]"
            field={FREE_CANDIES_FIELD}
            quantities={this.state.quantitiesLists[0]}
            maximumSelections={FREE_CANDIES_FIELD.maximumSelections}
            changeQuantity={(i, v) => this.setQuantities(0, i, v)}
            titleStyle={this.props.titleStyle}
          />
        )}
        {EXTRA_CANDIES_FIELD instanceof CheckboxesField && (
          <CheckboxesQuantityFieldView
            testID="CHECKBOXES[1]"
            field={EXTRA_CANDIES_FIELD}
            quantities={this.state.quantitiesLists[1]}
            maximumSelections={EXTRA_CANDIES_FIELD.maximumSelections}
            changeQuantity={(i, v) => this.setQuantities(1, i, v)}
            titleStyle={this.props.titleStyle}
          />
        )}
        {fields[2] instanceof HeaderField && (
          <HeaderFieldView
            field={fields[2]}
            testID={"HEADER"}
            textStyle={this.props.titleStyle}
          />
        )}
        {CARD_FORM_FIELDS && (
          <CardFormView
            testID={"CARD_FORM"}
            fields={CARD_FORM_FIELDS}
            cancelTitle="No card"
            card={this.state.card}
            setCard={this.setCard.bind(this)}
          />
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
