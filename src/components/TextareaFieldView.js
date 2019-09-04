// @flow
import React, { Component } from "react";
import { Text, View } from "react-native";
import { CheckBox } from "react-native-elements";
import TextareaField from "../models/fields/TextareaField";
import TextAreaOverlay from "./TextAreaOverlay";
import ExclusiveFieldView from "./ExclusiveFieldView";

type Props = {
  field: TextareaField,
  selectionHandler: (field: TextareaField, selection: string) => void,
  isSelected?: boolean
};

export function TextareaFieldView(props: Props) {
  // props.overlay = TextAreaOverlay;
  return <ExclusiveFieldView {...props} />;
}

export default TextareaFieldView;
