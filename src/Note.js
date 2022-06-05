import React from "react";

export default function Note({
  description,
  finished,
  handleDelete,
  handleFinish,
  handleEdit
}) {
  return (
    <div className={`${finished ? "finished" : ""}`}>
      <p>{description}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleFinish}>Finish</button>
      <button onClick={() => handleEdit(prompt("Enter new description"))}>
        Edit
      </button>
    </div>
  );
}
