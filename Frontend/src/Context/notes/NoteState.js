import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
    const s1 = {
      name: "Samrat",
      class: "3a"
    };
    const [state,setState]=useState(s1);
    const update =()=>{
        setTimeout(()=>{
            setState({
              name: "SamratUpdated",
              class: "New3a"
            });
        },1000)
    }
    return(
        <NoteContext.Provider value={{state,update}}>{props.children}</NoteContext.Provider>
    )
}


export default NoteState;