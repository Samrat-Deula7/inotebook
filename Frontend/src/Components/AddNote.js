 import noteContext from "../Context/notes/noteContext";
import { useContext, useState } from "react";

 const AddNote=()=>{
      const context = useContext(noteContext);
      const { addNote } = context;

      const [note, setNote] = useState({ title: "", description:"",tag:"" });
      const handleClick=()=>{

      }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    return (
      <div className="container my-3">
        <h2>Add a note</h2>
        <form>
          <div className="mb-3">
            <label htmlfor="title" className="form-label">
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
            <label htmlfor="desc" className="form-label">
              description
            </label>
            <input
              type="text"
              className="form-control"
              id="desc"
              name="desc"
              onChange={onChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlfor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
    );
 }

 export default AddNote;