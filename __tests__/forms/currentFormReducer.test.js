// @flow
import reducer from "../../src/redux/reducers/currentFormReducer";
import Field from "../../src/models/fields/Field";
import * as Types from "../../src/redux/FormTypes";
import * as Actions from "../../src/redux/actions/currentFormActions";

describe("currentFormReducer and actions", () => {
  const initialState: Types.FormState = {
    card: null,
    items: []
  };

  describe("setCard action", () => {
    const card: Types.Card = { message: "I love you", field: new Field() };
    const setCardAction: Types.SET_CARD = { type: "SET_CARD", card };

    it("returns an action with the card", () => {
      expect(Actions.setCard(card)).toEqual(setCardAction);
    });

    it("sets the card in the reducer", () => {
      const result = reducer(initialState, setCardAction);
      expect(result.card).toEqual(card);
      expect(result.card?.message).toEqual("I love you");
    });
  });
});
