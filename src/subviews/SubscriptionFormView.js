// @flow
import React, { Fragment, Component } from "react";
import { Text, View, ScrollView } from "react-native";
import Form from "../models/forms/Form";
import CheckboxesQuantityFieldView from "./fields/ChecboxesQuantityFieldView";
import CheckboxesField from "../models/fields/CheckboxesField";
import HeaderField from "../models/fields/HeaderField";
import HeaderFieldView from "./fields/HeaderFieldView";
import { ExclusiveSelectboxesFormSectionView as CardFormView } from "./fields/ExclusiveSelectboxesFormSectionView";

type Props = { form: Form };
type State = {};

class SubscriptionFormView extends Component<Props, State> {
  render() {
    /**
     * Subscription Form Structure:
     * 0. Checkboxes - 4 free candies
     * 1. Checkboxes - Unlimited $5 candies
     * 2. Header
     * 3. "Card Form" (selectbox, selectbox, textarea)
     */
    const fields = this.props.form.fields;
    return (
      <ScrollView>
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
        <Fragment key={"CARD FORM"}>
          <CardFormView fields={fields.slice(3)} />
        </Fragment>
      </ScrollView>
    );
  }
}
export default SubscriptionFormView;
