 import noteContext from "../Context/notes/noteContext";
import { useContext, useState } from "react";

 const AddNote=()=>{
      const context = useContext(noteContext);
      const { addNote } = context;

      const [note, setNote] = useState({ title: "", description:"",tag:"" });
      
      const submitNotes=(e)=>{
        e.preventDefault();
        addNote(note);
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
              onChange={onChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={submitNotes}
          >
            Submit
          </button>
        </form>
      </div>
    );
 }

 export default AddNote;