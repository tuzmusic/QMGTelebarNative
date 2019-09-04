// @flow
import * as Types from "../FormTypes";
import Field from "../../models/fields/Field";

export function setCard(card: Types.Card): Types.SET_CARD {
  return { type: "SET_CARD", card };
}
