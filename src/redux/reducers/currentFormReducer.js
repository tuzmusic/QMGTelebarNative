// @flow

export type FormState = {
  +message: ?string,
  +items: Object[]
};

export type SET_MESSAGE = { type: "SET_MESSAGE", message: string };

export type FormAction = SET_MESSAGE;

const initialState = {
  message: null,
  items: []
};
export default function currentformReducer(
  state: FormState = initialState,
  action: FormAction
): FormState {
  switch (action.type) {
    case "SET_MESSAGE":
      return { ...state, message: action.message };
    default:
      return state;
  }
}
