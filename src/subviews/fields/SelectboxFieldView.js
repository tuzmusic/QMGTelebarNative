// @flow
import React, { Component } from "react";
import SelectboxField from "../../models/fields/SelectboxField";
import Field from "../../models/fields/Field";
import ExclusiveFieldView from "./ExclusiveFieldView";

type Props = {
  field: SelectboxField,
  selectionHandler: (field: Field, selection: string) => void,
  isSelected?: boolean
};

export function SelectboxFieldView(props: Props) {
  return <ExclusiveFieldView {...props} />;
}

export default SelectboxFieldView;
