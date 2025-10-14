import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const preventDefault = (e) => {
    e.preventDefault();
  };
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword:""
  });
  let navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const createUser = async () => {
    // API Call
    const url = "http://localhost:5000/api/auth/createuser";
    const{name,email,password}=credentials;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,email,password
        }),
      });
      const result = await response.json();
      console.log(result);
      if (result.Success) {
        // Save the auth token and redirect
        localStorage.setItem("token", result.authtoken);
        navigate("/");
      } else {
        throw new Error(`Response status: ${response.status}`);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={preventDefault}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="cpassword"
            className="form-control"
            id="cpassword"
            name="cpassword"
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={createUser}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
