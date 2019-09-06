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

type SubmitOrderFn = ({card: FormTypes.Card, items: FormTypes.OrderItem[]}) => {type:"CREATE_ORDER", order: {}} 

type Props = { 
  form: Form,
  submitOrder: SubmitOrderFn// redux action
};

type State = {
  // these may ultimately be supplied by props???
  quantities: (number[])[], // controls the checkbox fields; set with setQuantities
  card: ?FormTypes.Card // controls card fields; set with setCard
}

// Subscription Form Structure
export const SUBSCRIPTION_FORM_FIELDS={
 FREE_CANDIES: 0,
 EXTRA_CANDIES: 1,
 HEADER_FIELD: 2,
 BIRTHDAY_CARD_FIELD: 3,
 ANNIV_CARD_FIELD: 3,
 CUSTOMER_CARD_FIELD: 4,
}

export class SubscriptionFormView extends Component<Props, State> {
  state = {
    quantities: [[],[]],
    card: null 
  };

  // Function signatures!
  setQuantities: () => void 
  setCard: (FormTypes.Card) => void
  handleOrder: function // calls props.submitOrder
  
  setCard(card: FormTypes.Card) {
    this.setState({card})
  }
  
  processItems(): OrderItem[] {
    const { quantities } = this.state
    // use quantities with the checkbox fields options to create the order items
  }
  
  handleOrder() {
     // put together the order (submitOrder will take some form-friendly type and use Order.toApi to create a valid order)
    const order = { card: this.state.card }
    this.props.submitOrder(order)
  }

  render() {
// flow doesn't like me using these in the actual render for some reason.
    const { FREE_CANDIES,
            EXTRA_CANDIES,
            HEADER_FIELD,
            BIRTHDAY_CARD_FIELD,
            ANNIV_CARD_FIELD,
            CUSTOMER_CARD_FIELD
            } = SUBSCRIPTION_FORM_FIELDS
    /*
      Subscription Form Structure:
      0. Checkboxes - 4 free candies
      1. Checkboxes - Unlimited $5 candies
      2. Header
      3. "Card Form" (selectbox, selectbox, textarea)
     */

     
    const fields = this.props.form.fields;
    return (
      <ScrollView>
        <Button 
          testID={'submitButton'} 
          title="Submit" 
          onPress={this.handleOrder.bind(this)} 
          containerStyle={styles.buttonContainer} 
          style={styles.button}
        />
        <Divider height={20} backgroundColor='transparent'/>
        <Fragment key={"CARD FORM"}>
          <CardFormView fields={fields.slice(3)} cancelTitle="No card" card={this.state.card} setCard={this.setCard.bind(this)}/>
        </Fragment>
        <Fragment key={"CHECKBOX 1"}>
          {fields[0] instanceof CheckboxesField && (
            <CheckboxesQuantityFieldView field={fields[0]} />
          )}
        </Fragment>
        <Fragment key={"CHECKBOX 2"}>
          {fields[1] instanceof CheckboxesField && (
            <CheckboxesQuantityFieldView field={fields[1]} />
          )}
        </Fragment>
        <Fragment key={"HEADER"}>
          {fields[2] instanceof HeaderField && (
            <HeaderFieldView field={fields[2]} />
          )}
        </Fragment>
        </ScrollView>
    );
  }
}

function submitOrder() {
  return {type:"PLACEHOLDER"}
}

const mapState = () => ({})

export default connect(mapState, {submitOrder})(SubscriptionFormView);

const styles ={
  buttonContainer: {
    width: '100%', alignItems: 'center'
  }, 
  button: { width:'50%'}
}