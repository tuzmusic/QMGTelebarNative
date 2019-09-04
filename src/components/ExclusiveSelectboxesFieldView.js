// @flow
import * as React from "react";
import Field from "../models/fields/Field";
import FieldRenderer from "../utilities/FieldRenderer";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";

type Props = {
  initialSelectionIndex?: number,
  fields: Field[],
  cancelTitle?: string
};
type State = { selectedIndex: ?number };

class ExclusiveSelectboxesFieldView extends React.Component<Props, State> {
  state = {
    selectedIndex:
      this.props.initialSelectionIndex || (this.props.cancelTitle ? null : 0)
  };

  handleSelection = (i: number) => this.setState({ selectedIndex: i });
  cancelSelection = (i: number) => this.setState({ selectedIndex: null });

  render() {
    return (
      <View>
        {this.props.cancelTitle && (
          <CheckBox
            title={this.props.cancelTitle}
            checked={this.state.selectedIndex == null}
            onPress={this.cancelSelection.bind(this)}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
        )}
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
