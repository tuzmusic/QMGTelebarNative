// @flow
import * as Types from "../FormTypes";
import Field from "../../models/fields/Field";

export function setCard(card: {
  message: string,
  field: Field
}): Types.SET_CARD {
  return { type: "SET_CARD", card };
}
