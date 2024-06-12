// NoteContext.jsx
import { createContext, useReducer } from "react";

const initialState = [];

const NoteContext = createContext({
  notes: initialState,
  dispatch: () => {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.note];
    case "REMOVE_NOTE":
      return state.filter((note) => note.name !== action.note.name);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const NoteProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(reducer, initialState);

  return (
    <NoteContext.Provider value={{ notes, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

export { NoteContext, NoteProvider };
