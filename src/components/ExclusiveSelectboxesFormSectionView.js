// @flow
import * as React from "react";
import { connect } from "react-redux";
import Field from "../models/fields/Field";
import FieldRenderer from "../utilities/FieldRenderer";
import ExclusiveFieldView from "../components/ExclusiveFieldView";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";
import * as FormTypes from "../redux/FormTypes";
import { setCard } from "../redux/actions/currentFormActions";

type Props = {
  initialSelectionIndex?: number,
  fields: Field[],
  cancelTitle?: string,
  // onSubmit: string => void,
  card: FormTypes.Card,
  setCard: FormTypes.Card => void
};
type State = { selectedIndex: ?number };

export class ExclusiveSelectboxesFormSectionView extends React.Component<
  Props,
  State
> {
  state = {
    selectedIndex:
      this.props.initialSelectionIndex || (this.props.cancelTitle ? null : 0)
  };

  handleSelection = (field: Field, message: string) => {
    this.props.setCard({ message, field });
  };
  // cancelSelection = () => this.setState({ selectedIndex: null });
  cancelSelection = () => this.props.setCard({ message: null, field: null });

  render() {
    return (
      <View>
        {this.props.cancelTitle && (
          <CheckBox
            title={this.props.cancelTitle}
            checked={this.props.card.field == null}
            onPress={this.cancelSelection.bind(this)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
        )}
        {this.props.fields.map((field, i) => {
          const props = {};

          // props.isSelected = this.state.selectedIndex === i;
          props.isSelected = this.props.card.field == field;
          props.selectionHandler = this.handleSelection.bind(this);

          return <ExclusiveFieldView field={field} key={i} {...props} />;
        })}
      </View>
    );
  }
}

const mapState = ({ currentFormReducer }) => {
  const card = currentFormReducer.card || { message: null, field: null };
  console.log(card);

  return { card };
};
const mapDispatch = { setCard };

export default connect(
  mapState,
  mapDispatch
)(ExclusiveSelectboxesFormSectionView);
