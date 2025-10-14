import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNote] = useState(notesInitial);

  // Add Note
  const addNote = async (title, description, tag) => {
    console.log("Adding a new node");
    // API Call
    const url = `${host}/api/notes/addnote`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhkNjUwMjVmNDM0ZGUzOTE1ZWZhYWM4In0sImlhdCI6MTc1ODk0Mzk0MX0.nxXnZL5yY83OOuIEiljD8nHb6bczEfQ0_uqzTdZOjvE",
        },
        body: JSON.stringify({ title, description, tag }),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const note = await response.json();
      console.log(note);
      setNote(notes.concat(note));
    } catch (error) {
      console.error(error.message);
    }

  
  };

  // Get all Notes
  const getNotes = async () => {
    // API Call
    const url = `${host}/api/notes/fetchallnotes`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhkNjUwMjVmNDM0ZGUzOTE1ZWZhYWM4In0sImlhdCI6MTc1ODk0Mzk0MX0.nxXnZL5yY83OOuIEiljD8nHb6bczEfQ0_uqzTdZOjvE",
        }      
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setNote(result);
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }

  
  };

  // Delete Note
  const deleteNote =async (id) => {
        // API Call
    const url = `${host}/api/notes/deletenote/${id}`;
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhkNjUwMjVmNDM0ZGUzOTE1ZWZhYWM4In0sImlhdCI6MTc1ODk0Mzk0MX0.nxXnZL5yY83OOuIEiljD8nHb6bczEfQ0_uqzTdZOjvE",
        }
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
    console.log(`Deleting note with id ${id}`);
    // .filter() has an inbuild loop so it can access each note._id and compare it with the given id.
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNote(newNotes);
  };

  // Edit Note
  const editNote = async (id, title, description, tag) => {
    // API Call  // You can get boiler plate code for fetch with header is u search it up.

    const url = `${host}/api/notes/updatenote/${id}`;
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhkNjUwMjVmNDM0ZGUzOTE1ZWZhYWM4In0sImlhdCI6MTc1ODk0Mzk0MX0.nxXnZL5yY83OOuIEiljD8nHb6bczEfQ0_uqzTdZOjvE",
        },
        body: JSON.stringify({ title, description, tag }),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }

    let newNotes= JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNote(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
