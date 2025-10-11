import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const notesInitial = [
      {
        _id: "68d93ec032ec73067e436",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:20.392Z",
        __v: 0,
      },
      {
        _id: "68d93ec132ec73063a37e4",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook second time hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:21.749Z",
        __v: 0,
      },
      {
        _id: "68d93ec032e73063a37e436",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:20.392Z",
        __v: 0,
      },
      {
        _id: "68d93ec132ec73063a3e438",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook second time hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:21.749Z",
        __v: 0,
      },
      {
        _id: "68d93ec032ec73063a37e43006",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:20.392Z",
        __v: 0,
      },
      {
        _id: "68d93ec132ec7306343e438",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook second time hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:21.749Z",
        __v: 0,
      },
      {
        _id: "68d93ec032ec73063a3725e436",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:20.392Z",
        __v: 0,
      },
      {
        _id: "68d93ec132ec765863063a37e438",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook second time hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:21.749Z",
        __v: 0,
      },
      {
        _id: "68d93ec132ec7456223063a37e438",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook second time hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:21.749Z",
        __v: 0,
      },
      {
        _id: "68d93ec132ec732435063a37e438",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook second time hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:21.749Z",
        __v: 0,
      },
      {
        _id: "68d93ec13c73063a76537e438",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook second time hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:21.749Z",
        __v: 0,
      },
      {
        _id: "68d93ec132ec763a31237e438",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook second time hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:21.749Z",
        __v: 0,
      }
    ];
    
    const [notes, setNote] = useState(notesInitial);

    // Add Note
    const addNote = (title, description, tag) => {
      console.log("Adding a new node");
        // TODO: API Call.
       const note=  {
        _id: "234502374",
        user: "68d65025f434de3915efaac8",
        title: "This is an temporarily added note  ",
        description: "book is really great [ADDED]",
        tag: "personal",
        date: "2025-09-28T13:57:21.749Z",
        __v: 0,
      };
      setNote(notes.concat(note));
    };
    // Delete Note
     const deleteNote = (id) => {};
    // Edit Note
     const editNote = (id) => {};

    return (
      <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
        {props.children}
      </NoteContext.Provider>
    );
}


export default NoteState;