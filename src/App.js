import React, { useMemo, useCallback, useState, useContext } from "react";
import { useTheme, ThemeProvider } from "../src/themes/ThemeContext";
import ThemeCustomization from "../src/themes/ThemeCustomization";
import Card from "../src/components/Card";
import Form from "../src/components/Form";
import { NoteProvider, NoteContext } from "../src/contexts/NoteContext";
import useNotesStatistics from "../src/hooks/useNotesStatistics";
import { FaTrash } from "react-icons/fa";
import styles from "./components/styles";
const NotesList = () => {
  const { notes, dispatch } = useContext(NoteContext);
  const theme = useTheme();
  const stylesCard = styles(theme);
  return (
    <>
      {notes.map((note, index) => (
        <Card key={index}>
          <>
            <h3 style={stylesCard.h3}>Name: {note.name}</h3>
            <p style={stylesCard.p}>Age: {note.age}</p>
            <p style={stylesCard.p}>Noted: {note.noted}</p>
            <div style={stylesCard.buttonContainer}>
              <button
                style={stylesCard.button}
                onClick={() => dispatch({ type: "REMOVE_NOTE", note })}
              >
                <FaTrash />
              </button>
            </div>
          </>
        </Card>
      ))}
    </>
  );
};

const AddNotes = () => {
  const { dispatch } = useContext(NoteContext);
  const theme = useTheme();
  const formStyles = styles(theme);
  const init = useMemo(
    () => ({
      name: "",
      age: 0,
      noted: "",
    }),
    []
  );

  const [state, setState] = useState(init);
  const formHandler = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: "ADD_NOTE",
        note: {
          name: state.name,
          age: state.age,
          noted: state.noted,
        },
      });
      setState(init);
    },
    [dispatch, state, init]
  );

  const handleChange = useCallback(
    (type) => (e) => {
      setState({
        ...state,
        [type]: e.target.value,
      });
    },
    [state]
  );

  return (
    <div>
      <Form onSubmit={formHandler}>
        <>
          <h2 style={formStyles.h2}>ADD NOTE</h2>

          <label htmlFor="name" style={formStyles.label}>
            Name:
            <input
              type="text"
              placeholder="Name"
              value={state.name}
              style={formStyles.input}
              required
              onChange={handleChange("name")}
            />
          </label>
          <label htmlFor="age" style={formStyles.label}>
            Age:
            <input
              type="number"
              placeholder="Age"
              value={state.age}
              style={formStyles.input}
              required
              onChange={handleChange("age")}
            />
          </label>
          <label htmlFor="noted" style={formStyles.label}>
            Noted:
            <textarea
              placeholder="Noted"
              value={state.noted}
              style={formStyles.textarea}
              required
              onChange={handleChange("noted")}
            />
          </label>
          <input
            style={formStyles.submitButton}
            type="submit"
            value="Add Note"
          />
        </>
      </Form>
    </div>
  );
};

const Statistics = () => {
  const { totalNotes, over16, under17 } = useNotesStatistics();
  const theme = useTheme();
  const customStyles = styles(theme);

  return (
    <div style={customStyles.form}>
      <h2 style={customStyles.h2}>STATISTICS</h2>
      <p style={customStyles.p}>Total number of notes: {totalNotes}</p>
      <p style={customStyles.p}>Number over 16 years old: {over16}</p>
      <p style={customStyles.p}>Number under 17 years old: {under17}</p>
    </div>
  );
};

export default function App() {
  const { notes } = useContext(NoteContext);
  return (
    <ThemeProvider theme={ThemeCustomization()}>
      <NoteProvider>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <AddNotes />
          </div>
          <div style={{ flex: 1 }}>
            <Statistics />
          </div>
        </div>
        <h2>Notes</h2>
        <div className="cards" style={{ display: "flex", flexWrap: "wrap" }}>
          <NotesList notes={notes} />
        </div>
      </NoteProvider>
    </ThemeProvider>
  );
}
