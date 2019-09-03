// @flow
import * as React from "react";
import Field from "../models/fields/Field";
import FieldRenderer from "../utilities/FieldRenderer";
import { View } from "react-native";

type Props = {
  initialSelectionIndex?: number,
  fields: Field[]
};
type State = { selectedIndex: number };

class ExclusiveSelectboxesFieldView extends React.Component<Props, State> {
  state = {
    selectedIndex: this.props.initialSelectionIndex || 0
  };

  handleSelection = (i: number) => {
    this.setState({ selectedIndex: i });
  };

  render() {
    return (
      <View>
        {this.props.fields.map((field, i) => {
          const props = {};

          props.isSelected = this.state.selectedIndex === i;
          props.selectionHandler = this.handleSelection.bind(this, i);

          return <FieldRenderer field={field} key={i} {...props} />;
        })}
      </View>
    );
  }
}
export default ExclusiveSelectboxesFieldView;
