import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const notesInitial = [
      {
        _id: "68d93ec032ec73063a37e436",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:20.392Z",
        __v: 0,
      },
      {
        _id: "68d93ec132ec73063a37e438",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook second time hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:21.749Z",
        __v: 0,
      },
      {
        _id: "68d93ec032ec73063a37e436",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:20.392Z",
        __v: 0,
      },
      {
        _id: "68d93ec132ec73063a37e438",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook second time hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:21.749Z",
        __v: 0,
      },
      {
        _id: "68d93ec032ec73063a37e436",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:20.392Z",
        __v: 0,
      },
      {
        _id: "68d93ec132ec73063a37e438",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook second time hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:21.749Z",
        __v: 0,
      },
      {
        _id: "68d93ec032ec73063a37e436",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:20.392Z",
        __v: 0,
      },
      {
        _id: "68d93ec132ec73063a37e438",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook second time hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:21.749Z",
        __v: 0,
      },
      {
        _id: "68d93ec132ec73063a37e438",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook second time hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:21.749Z",
        __v: 0,
      },
      {
        _id: "68d93ec132ec73063a37e438",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook second time hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:21.749Z",
        __v: 0,
      },
      {
        _id: "68d93ec132ec73063a37e438",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook second time hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:21.749Z",
        __v: 0,
      },
      {
        _id: "68d93ec132ec73063a37e438",
        user: "68d65025f434de3915efaac8",
        title: "Updating form new inotebook second time hatty potter",
        description: "book is really great but it is hard to read",
        tag: "personal",
        date: "2025-09-28T13:57:21.749Z",
        __v: 0,
      },
    ];
    
    const [notes, setNotes] = useState(notesInitial);
    return(
        <NoteContext.Provider value={{notes,setNotes}}>{props.children}</NoteContext.Provider>
    )
}


export default NoteState;