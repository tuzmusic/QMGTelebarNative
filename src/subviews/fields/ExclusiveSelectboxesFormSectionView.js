// @flow
import * as React from "react";
import { connect } from "react-redux";
import SelectboxField from "../../models/fields/SelectboxField";
import TextareaField from "../../models/fields/TextareaField";
import FieldRenderer from "../../utilities/FieldRenderer";
import ExclusiveFieldView from "../../subviews/fields/ExclusiveFieldView";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";
import * as FormTypes from "../../redux/FormTypes";

type ExclusiveField = SelectboxField | TextareaField;
type Props = {
  fields: ExclusiveField[],
  cancelTitle?: string,
  card: ?FormTypes.Card,
  setCard: FormTypes.Card => void
};

export class ExclusiveSelectboxesFormSectionView extends React.Component<Props> {
  handleSelection = (field: ExclusiveField, message: string) => {
    this.props.setCard({ message, field });
  };
  cancelSelection = () => this.props.setCard({ message: null, field: null });

  render() {
    const card = this.props.card || { message: null, field: null };

    return (
      <View>
        {this.props.cancelTitle && (
          <CheckBox
            title={this.props.cancelTitle}
            checked={card.field == null}
            onPress={this.cancelSelection.bind(this)}
            {...defaultIcons}
          />
        )}
        {this.props.fields.map((field, i) => (
          <ExclusiveFieldView
            field={field}
            key={i}
            isSelected={card.field == field}
            selectionHandler={this.handleSelection.bind(this)}
          />
        ))}
      </View>
    );
  }
}

const defaultIcons = {
  checkedIcon: "dot-circle-o",
  uncheckedIcon: "circle-o"
};
