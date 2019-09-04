// @flow
import * as React from "react";
import Field from "../models/fields/Field";
import FieldRenderer from "../utilities/FieldRenderer";
import ExclusiveFieldView from "../components/ExclusiveFieldView";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";

type Props = {
  initialSelectionIndex?: number,
  fields: Field[],
  cancelTitle?: string,
  onSubmit: string => void
};
type State = { selectedIndex: ?number };

class ExclusiveSelectboxesFormSectionView extends React.Component<
  Props,
  State
> {
  state = {
    selectedIndex:
      this.props.initialSelectionIndex || (this.props.cancelTitle ? null : 0)
  };

  handleSelection = (index: number, value: string) => {
    this.setState({ selectedIndex: index }, () => this.props.onSubmit(value));
  };
  cancelSelection = () => this.setState({ selectedIndex: null });

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

          return <ExclusiveFieldView field={field} key={i} {...props} />;
        })}
      </View>
    );
  }
}
export default ExclusiveSelectboxesFormSectionView;
