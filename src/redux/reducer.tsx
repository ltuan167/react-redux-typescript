import { Action } from "./action";

export interface NotesState {
  notes: string[];
}

const initialState = {
  notes: [],
};

export const reducer = (state: NotesState = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_NOTE": {
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    }
    default:
      return state;
  }
};
