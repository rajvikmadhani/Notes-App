import { createContext, useContext, useReducer, useEffect } from "react";

const NotesContext = createContext();

const notesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      const newNotes = [...state, action.payload];
      localStorage.setItem("notes", JSON.stringify(newNotes));
      return newNotes;

    case "UPDATE_NOTE":
      const updatedNotes = state.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;

    case "DELETE_NOTE":
      const filteredNotes = state.filter((note) => note.id !== action.payload);
      localStorage.setItem("notes", JSON.stringify(filteredNotes));
      return filteredNotes;

    default:
      return state;
  }
};

const NotesProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(
    notesReducer,
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
export default NotesProvider;
