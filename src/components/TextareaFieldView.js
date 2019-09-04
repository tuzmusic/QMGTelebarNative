// @flow
import React, { Component } from "react";
import TextareaField from "../models/fields/TextareaField";
import Field from "../models/fields/Field";
import ExclusiveFieldView from "./ExclusiveFieldView";

type Props = {
  field: TextareaField,
  selectionHandler: (field: Field, selection: string) => void,
  isSelected?: boolean
};

export function TextareaFieldView(props: Props) {
  return <ExclusiveFieldView {...props} />;
}

export default TextareaFieldView;
