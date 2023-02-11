import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    setNotes([...notes, currentNote]);
    setCurrentNote("");
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((note, i) => i !== index));
  };

  const editNote = (index, newNote) => {
    const newNotes = [...notes];
    newNotes[index] = newNote;
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <h1 className="header">Note Taking App</h1>
      <form onSubmit={addNote}>
        <input
          className="input"
          type="text"
          placeholder="Enter a new note"
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
        />
        <button className="button" type="submit">
          Add Note
        </button>
      </form>
      <ul className="notes-list">
        {notes.map((note, index) => (
          <li key={index} className="note">
            <p classNaxxme="note-text">{note}</p>
            <div className="buttons-container">
              <button
                className="delete-button"
                onClick={() => deleteNote(index)}
              >
                Delete
              </button>
              <button
                className="edit-button"
                onClick={() => editNote(index, prompt("Edit note"))}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
