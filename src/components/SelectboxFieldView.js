// @flow
import React, { Component } from "react";
import { View, Text } from "react-native";
import { CheckBox, Overlay, Input, Button } from "react-native-elements";
import SelectboxField from "../models/fields/SelectboxField";
import SelectOptionsOverlay from "./SelectOptionsOverlay";
import ExclusiveFieldView from "./ExclusiveFieldView";

type Props = {
  field: SelectboxField,
  selectionHandler: (field: SelectboxField, selection: string) => void,
  isSelected?: boolean
};

export function SelectboxFieldView(props: Props) {
  // props.overlay = SelectOptionsOverlay;
  return <ExclusiveFieldView {...props} />;
}

export default SelectboxFieldView;
