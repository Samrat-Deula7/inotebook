 import noteContext from "../Context/notes/noteContext";
import { useContext, useState } from "react";

 const AddNote=()=>{
      const context = useContext(noteContext);
      const { addNote } = context;

      const [note, setNote] = useState({ title: "", description:"",tag:"" });

      const submitNotes=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({ title: "", description: "", tag: "" });
      }

     // In the following code the ...note is used to spread the object then add the value given in the right side of "," .
     // The value add is in key:value pair.  
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    return (
      <div className="container my-3">
        <h2>Add a note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="Text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              value={note.title}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={note.description}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={onChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitNotes}
            disabled={note.title.length<5 || note.description.length<5}
          >
            Add Note
          </button>
        </form>
      </div>
    );
 }

 export default AddNote;