import "./styles.css";
import React, { useState } from "react";
import Note from "./Note";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [id, setId] = useState(1);

  function createNewTodo() {
    const newNote = {
      id: id,
      description: `New note ${id}`,
      finished: false
    };
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    setId((oldId) => oldId + 1);
  }

  function handleDelete(id) {
    setNotes((oldNotes) => oldNotes.filter((note) => note.id !== id));
  }

  function handleFinish(id) {
    setNotes((oldNotes) => {
      return oldNotes.map((note) =>
        note.id === id ? { ...note, finished: !note.finished } : note
      );
    });
  }

  function handleEdit(id) {
    return (description) => {
      setNotes((prevNotes) => {
        return prevNotes.map((note) =>
          note.id === id ? { ...note, description: description } : note
        );
      });
    };
  }

  return (
    <div className="App">
      {notes.map((note) => (
        <div
          key={note.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px"
          }}
        >
          <Note
            description={note.description}
            finished={note.finished}
            handleDelete={() => handleDelete(note.id)}
            handleFinish={() => handleFinish(note.id)}
            handleEdit={handleEdit(note.id)}
          />
        </div>
      ))}
      <button onClick={createNewTodo}>Create new notes</button>
    </div>
  );
}
